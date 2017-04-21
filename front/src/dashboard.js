import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-6">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <img id="search" src={require('../public/search-icon.png')} alt="" />
                        </div>
                    </form>
                </div>
                <div className="col-xs-6" id="map-container">
                    <img id="map" src={require('../public/map.png')} alt="" />
                </div>
            </div>
        )
    }
}

export default Dashboard;