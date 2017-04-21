import React             from "react";
import App               from './App';
import Home              from './home';
import Login             from './login';
import Dashboard         from './dashboard';
import Profile         from './profile';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home}></Route>
            <Route path="login" component={Login}></Route>
            <Route path="dashboard" component={Dashboard}></Route>
            <Route path="profile" component={Profile}></Route>

        </Route>
    </Router>
);

export default routes;