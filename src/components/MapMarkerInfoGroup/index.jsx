import React from 'react'
import { InfoWindow, Marker } from 'google-maps-react'

const MapMarkerInfoGroup = props => {
  console.log(props, 'props aree')
  return (
    <p>This is a thing</p>
    // <React.Fragment>
    //   <Marker onClick={props.onMarkerClick} name={'current location'} />
    //   <InfoWindow
    //     marker={props.activeMarker}
    //     visible={props.showingInfoWindow}
    //     onClose={props.onClose}
    //   >
    //     <div>
    //       <h4>{props.selectedPlace.name}</h4>
    //     </div>
    //   </InfoWindow>
    // </React.Fragment>
  )
}

export default MapMarkerInfoGroup
