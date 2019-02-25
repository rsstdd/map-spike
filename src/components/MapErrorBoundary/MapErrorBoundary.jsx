import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ErrorMessage from '../ErrorMessage/ErrorMessage'

class MapErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      info: null,
    }
  }

  componentDidCatch(error, info) {
    this.setState({ error: error, info: info })
  }

  render() {
    const { error } = this.state

    if (error) {
      return <ErrorMessage />
    }

    return this.props.children
  }
}

MapErrorBoundry.propTypes = {
  children: PropTypes.object,
}

export default MapErrorBoundry
