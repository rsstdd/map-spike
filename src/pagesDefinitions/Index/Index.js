import React, { Component } from 'react'
import App from '../../containers/App'
import Seo from '../../components/Seo/Seo'
import Map from '../../components/MapWrapper'
// import MapErrorBoundary from '../../components/MapErrorBoundary/MapErrorBoundary'

import getProviderInformation from './lib/index'

class IndexPage extends Component {
  state = {
    providerResponse: {},
  }

  async componentDidMount() {
    const data = await getProviderInformation()
    this.setState({ providerResponse: data })
  }

  render() {
    const { providerResponse } = this.state

    console.log(providerResponse, 'providerResponse')

    return (
      <App>
        <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Map providerResponse={providerResponse} />
      </App>
    )
  }
}

export default IndexPage
