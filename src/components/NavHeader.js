import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return(
      <div className="nav-header">
        <span><p className="glyphicon glyphicon-menu-left" aria-hidden="true"></p>Back</span>
        <h3>Newbolon@Home</h3>
        <span className="glyphicon glyphicon-globe" aria-hidden="true"></span>
      </div>
    )
  }
}

export default NavHeader;
