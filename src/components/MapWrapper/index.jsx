import React, { Component } from 'react'
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

import CurrentLocation from '../Map'
import MapMarkerInfoGroup from '../MapMarkerInfoGroup'

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    const { providerResponse } = this.props

    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        {/* <MapMarkerInfoGroup
          onMarkerClick={this.onMarkerClick}
          activeMarker={this.state.activeMarker}
          showingInfoWindow={this.state.showingInfoWindow}
          onClose={this.onClose}
          selectedPlace={this.state.selectedPlace}
          providerResponse={providerResponse}
        /> */}
      </CurrentLocation>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBF2U06mKQDpI2pjh8H6gkFevyZYLuW7tE',
})(MapContainer)
