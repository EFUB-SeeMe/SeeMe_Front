// import { InfoWindow, Map, Marker } from "google-maps-react";
import React, { Component } from "react";
// import {GoogleApiWrapper} from 'google-maps-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import bluedust from '../../assets/bluedust.svg'
import greendust from '../../assets/greendust.svg'

const mapStyles = {
    width: '250px',
    height: '250px',
};

/*
var myIcon = new google.maps.MarkerImage("../../assets/bluedust.svg", null, null, null, new google.maps.Size(12,20));
 
marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: myIcon,
            title : "마우스 오버 시 정보창 출력됨"
        });


*/
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
          <Marker 
            lat="37"
            lng="126"
            />
   
         
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyAI9yihm1CoK68GFNG1CY3RR7JCgHorZxk')
  })(MapContainer)