import React, { Component } from 'react';
import { GoogleMap, Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '250px',
    height: '250px',
};

export class MapAPI extends Component {
    render() {
        return (
            <>
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                {
                    lat: 126,
                    lng: 37,
                }
                } 
            >
                <Marker position={{ lat: 126, lng: 37 }}/>
            </Map>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDbSUak1XerICwrgaSN1N0Y68Tq8xy3cMg'
})(MapAPI);

