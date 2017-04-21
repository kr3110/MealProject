import React, { Component } from 'react';

class Home extends Component {
    goToLogin(event) {
        event.preventDefault();
        var Router = require('react-router');
        Router.browserHistory.push('/login');
    }

    render() {
        return (
            <div>
                <div className="row">
                        <img id="home-page" src={require('../public/savor.png')} alt="" />
                </div>
                <div className="row" id="works">
                    <h2>How it works</h2>
                    <div id="container-work">
                        <div className="col-md-2">
                            <h3>Find</h3>
                            <img id="pin" src={require('../public/pin.png')} alt="" />
                            <p>Find people based on your location</p>
                        </div>
                        <div className="col-md-2">
                            <h3>Invite</h3>
                            <img id="mail" src={require('../public/mail.png')} alt="" />
                            <p>Send invitations to people with the same food interest as you</p>
                        </div>
                        <div className="col-md-2">
                            <h3>Enjoy</h3>
                            <img id="share" src={require('../public/share.jpg')} alt="" />
                            <p>Savor a meal with a great conversation</p>
                        </div><div className="col-md-2">
                            <h3>Reward</h3>
                            <img id="reward" src={require('../public/reward.png')} alt="" />
                            <p>Accumulate points towards your favorite restaurant</p>
                        </div>
                    </div>
                </div>
                <div className="row" id="getStarted">
                    <h2>Make each meal count</h2>
                    <button className="btn btn-default" id="start-button" onClick={this.goToLogin.bind(this)}>Get Started</button>
                    {/*<button className="btn btn-default">*/}
                        {/*<img id="linkedin" src={require('../public/linkedin.png')} alt="" />*/}
                    {/*</button>*/}
                    {/*<br/>*/}
                    {/*<p id="space"><br/></p>*/}
                    {/*<button className="btn btn-default">*/}
                        {/*<img id="facebook" src={require('../public/facebook.png')} alt="" />*/}
                    {/*</button>*/}
                </div>
            </div>
        )
    }
}

export default Home;