import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <img id="home-page" src={require('../public/meal2.jpg')} alt="" />
                </div>
                <div className="row">
                    <h2 className="title">how it works</h2>
                    <div className="col-md-3">Location</div>
                    <div className="col-md-3">Find People</div>
                    <div className="col-md-3">Calculate</div>
                    <div className="col-md-3">Rewards</div>
                </div>
            </div>
        )
    }
}

export default Home;