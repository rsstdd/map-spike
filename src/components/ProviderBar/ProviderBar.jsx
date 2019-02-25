import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import pbStyle from './provider-bar.module.scss'

const ProviderBar = () => (
  <footer className={`${pbStyle.providerBar}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <p className="footer-gatsby" />
        </div>
      </div>
    </div>
  </footer>
)

ProviderBar.propTypes = {}
ProviderBar.defaultProps = {}

export default ProviderBar
