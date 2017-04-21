import React, { Component } from 'react';
import { Link }             from 'react-router';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                        {/*<div className="navbar-header">*/}
                            {/*<button type="button" id="closeButton" className="navbar-toggle collapsed">*/}
                                {/*<span className="sr-only">Toggle navigation</span>*/}
                                {/*<span className="icon-bar">HOME</span>*/}
                                {/*<span className="icon-bar">HOW IT WORKS </span>*/}
                                {/*<span className="icon-bar"> </span>*/}
                            {/*</button>*/}
                        {/*</div>*/}
                        <div className="collapse navbar-collapse" id="collapsedNav">
                            {/*<form className="navbar-form navbar-left">*/}
                                {/*<div className="form-group">*/}
                                    {/*<input type="text" className="form-control" placeholder="Search"/>*/}
                                {/*</div>*/}
                            {/*</form>*/}
                            <ul className="nav navbar-nav navbar-right" id="mainNav">
                                <li><Link to="/home">HOME</Link></li>
                                <li><a href="#">HOW IT WORKS</a></li>
                                <li><a href="#">ABOUT US</a></li>
                            </ul>
                        </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;
