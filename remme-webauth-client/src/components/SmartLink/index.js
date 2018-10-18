import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SmartLink extends Component {
    render() {
        const { link, children, linkClass, action } = this.props;
        if (action) {
          return <span className = { linkClass || "link" } onClick={() => action()}>{children}</span>
        } else {
          return <Link className = { linkClass || "link" } target={ link.substring(0, 4) === 'http' ? '_blank' : null } to={link}>{children}</Link>
        }
    }
}

export default SmartLink;
