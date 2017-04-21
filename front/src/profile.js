import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="row" id="profile-container">
                <div className="row">
                    <img id="profile" src={require('../public/profile.png')} alt="" />
                </div>
                <div className="row">
                    <img id="journeys" src={require('../public/journeys.png')} alt="" />
                </div>
            </div>

        )
    }
}

export default Profile;