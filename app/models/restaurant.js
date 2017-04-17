var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
//userModel  schema
var restaurantSchema = new Schema({
    email: {
        type: String
        , unique: true
        , required: true
    }
    , password: {
        type: String
        , required: true
    }
    , name: {
        type: String
    }
    , address: {
        type: String
    }
    ,
    tags:{
        type: String
    }
    
});

restaurantSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    }
    else {
        return next();
    }
});
restaurantSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
module.exports = mongoose.model('restaurtant', restaurantSchema);