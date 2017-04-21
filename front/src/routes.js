import React             from "react";
import App               from './App';
import Home              from './home';
import Login             from './login';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home}></Route>
            <Route path="login" component={Login}></Route>

        </Route>
    </Router>
);

export default routes;