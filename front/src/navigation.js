import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                        <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/*<a className="navbar-brand" href="#">*/}
                                <img id="logo" src={require('../public/SavorTable-logo.png')} alt="" />
                            {/*</a>*/}
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                </div>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">LOGIN</a></li>
                                <li><a href="#">SIGN UP</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;
