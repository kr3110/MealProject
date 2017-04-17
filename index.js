var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');
var User = require('./app/models/user');
var messages = require('./app//models/messages');
var port = process.env.PORT || 8080;
var jwt = require('jwt-simple');
var server = require('http').Server(app);
var io = require('socket.io')(server);
//request parameters
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//console log
app.use(morgan('dev'));
//passport 
app.use(passport.initialize());
// demo route 
app.get('/', function (req, res) {
    res.send('Hi how r u');
});
mongoose.connect(config.database);
require('./config/passport')(passport);
var apiRoutes = express.Router();
//signup
apiRoutes.post('/signup', function (req, res) {
    if (!req.body.name || !req.body.password) {
        res.json({
            success: false
            , msg: 'Please pass user fields'
        });
    }
    else {
        var newUser = new User({
            email: req.body.email
            , password: req.body.password
            , name: req.body.name
            , lastname: req.body.lastname
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({
                    success: false
                    , msg: 'Username exists.'
                });
            }
            res.json({
                success: true
                , msg: 'Successful created new user.'
            });
        });
    }
});
// connect the api routes under /api/*
app.use('/api', apiRoutes);
//authentication
apiRoutes.post('/authenticate', function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.send({
                success: false
                , msg: 'Authentication failed. User not found.'
            });
        }
        else {
            // check if matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // create a token
                    var token = jwt.encode(user, config.secret);
                    // return inf + JSON token
                    res.json({
                        success: true
                        , token: 'jwt ' + token
                    });
                }
                else {
                    res.send({
                        success: false
                        , msg: 'Wrong password.'
                    });
                }
            });
        }
    });
});
//userinfo
//need to specify jwt token on headers
//having toubles with this route 
//TypeError: parsed_url.query.hasOwnProperty is not a function. 
apiRoutes.get('/userinfo', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        User.findOne({
            name: decoded.name
        }, function (err, user) {
            if (err) throw err;
            if (!user) {
                return res.status(403).send({
                    success: false
                    , msg: 'Authentication failed. User not found.'
                });
            }
            else {
                res.json({
                    success: true
                    , name: user.name
                    , lastname: user.lastname
                    , email: user.email
                });
            }
        });
    }
    else {
        return res.status(403).send({
            success: false
            , msg: 'No token provided.'
        });
    }
});
//get token from headers
getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
};
app.listen(port);
console.log('testing');