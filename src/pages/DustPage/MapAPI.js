// import { InfoWindow, Map, Marker } from "google-maps-react";
import React, { Component } from "react";
// import {GoogleApiWrapper} from 'google-maps-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
    width: '250px',
    height: '250px',
};

//note: code formatted for ES6 here
export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
            onClick={this.onMapClicked}
            style={mapStyles}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
         
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyAI9yihm1CoK68GFNG1CY3RR7JCgHorZxk')
  })(MapContainer)