import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link activeStyle={{color:'#7c4dff'}} onlyActiveOnIndex={true} to="/"><p><span className="glyphicon glyphicon-home"></span><br/>Home</p></Link>
        <Link activeStyle={{color:'#7c4dff'}} to="/blog"><p><span className="glyphicon glyphicon-bookmark"></span><br/>Blog</p></Link>
        <Link activeStyle={{color:'#7c4dff'}} to="/work"><p><span className="glyphicon glyphicon-education"></span><br/>Work</p></Link>
        <Link activeStyle={{color:'#7c4dff'}} to="/about"><p><span className="glyphicon glyphicon-user"></span><br/>About</p></Link>
      </div>
    )
  }
}

export default NavFooter;
