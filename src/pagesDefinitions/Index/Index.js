import React, { Component } from 'react'
import App from '../../containers/App'
import Seo from '../../components/Seo/Seo'
import Map from '../../components/MapWrapper'
import MapErrorBoundary from '../../components/MapErrorBoundary/MapErrorBoundary'

import getProviderInformation from './lib/index'

class IndexPage extends Component {
  state = {
    providerResponse: {},
  }

  async componentDidMount() {
    const providerResponse = await getProviderInformation()
    this.setState({ providerResponse: providerResponse })
  }

  render() {
    const { providerResponse } = this.state
    return (
      <App>
        {/* <MapErrorBoundary> */}
        <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Map providerResponse={providerResponse} />
        {/* </MapErrorBoundary> */}
      </App>
    )
  }
}

export default IndexPage
