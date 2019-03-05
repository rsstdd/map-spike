import React from 'react'
import ReactDOM from 'react-dom'

import styles from './map-styles'

const mapStyles = {
  map: {
    position: 'absolute',
    width: '110%',
    height: '110%',
  },
}

class CurrentLocation extends React.Component {
  constructor(props) {
    super(props)
    const { lat, lng } = this.props.initialCenter
    this.map = React.createRef()
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng,
      },
    }
  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude,
            },
          })
        })
      }
    }

    this.loadMap()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap()
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap()
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google, zoom } = this.props
      const { lat, lng } = this.state.currentLocation

      const maps = google.maps
      const mapRef = this.map.current
      const center = new maps.LatLng(lat, lng)
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom,
          styles: styles,
        }
      )
      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(mapRef, mapConfig)
    }
  }

  recenterMap() {
    const map = this.map
    const { google } = this.props
    const current = this.state.currentLocation

    const maps = google.maps

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng)
      map.panTo(center)
    }
  }

  renderChildren() {
    const { children } = this.props

    if (!children) {
      return
    }

    return React.Children.map(children, c => {
      if (!c) {
        return
      }

      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation,
      })
    })
  }

  render() {
    const style = Object.assign({}, mapStyles.map)

    return (
      <div>
        <div style={style} ref={this.map}>
          Loading map...
        </div>
        {this.renderChildren()}
      </div>
    )
  }
}

export default CurrentLocation

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233,
  },
  centerAroundCurrentLocation: false,
  visible: true,
}
