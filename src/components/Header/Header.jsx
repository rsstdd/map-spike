import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './header.module.scss'

const Header = ({ siteTitle, menuLinks }) => {
  let stylesStr

  if (process.env.NODE_ENV === `production`) {
    try {
      stylesStr = require(`!raw-loader!../public/styles.css`)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  let css
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    )
  }
  return (
    <header className="nav">
      {css}
      <div className="nav-list">
        <h1>{siteTitle}</h1>
        {menuLinks.map(item => (
          <Link key={item.link} to={item.link} className="nav-list-item">
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: `Can I Has Maps?`,
}

export default Header
