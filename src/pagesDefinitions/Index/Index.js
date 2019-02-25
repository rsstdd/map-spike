import React from 'react'
import App from '../../containers/App'
import Seo from '../../components/Seo/Seo'
import Map from '../../components/MapWrapper/MapWrapper'
// import MapErrorBoundary from '../../components/MapErrorBoundary/MapErrorBoundary'

const IndexPage = () => (
  <App>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Map />
  </App>
)

export default IndexPage
