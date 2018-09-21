import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SmartLink extends Component {
    render() {
        const { link, children } = this.props;
        return (
            <Link className = "link" target={ link.substring(0, 4) === 'http' ? '_blank' : null } to={link}>{children}</Link>
        )
    }
}

export default SmartLink;