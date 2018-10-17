import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";

import "./style.scss";
import { logout } from "../../actions";
import { Logo } from "../index";
import { NavigationItem } from "../../components";

//----------------------------------------------------------------------------------------------------------------------

const NavigationItems = [
    {
        title: 'Products',
        items: [{
            title: 'Platform Overview',
            link: "https://remme.webflow.io/platform-overview",
        },{
            title: 'REMChain',
            link: "https://remme.io/remchain",
        }]
    },{
        title: 'Use Cases',
        link: 'https://remme.io/use-cases',
    },{
        title: 'About us',
        link: 'https://remme.io/about-us',
    },{
        title: 'Community',
        link: "https://remme.io/community",
    },{
        title: 'Resources',
        items: [{
            title: 'Blog',
            link: "https://medium.com/remme",
        },{
            title: 'Knowledge Base',
            link: "https://support.remme.io/",
        },{
            title: 'Developers Documentation',
            link: "https://docs.remme.io/",
        }]
    },{
        title: 'Contact us',
        link: "https://remme.io/contact-us",
    },{
        title: '+ Join pilot program',
        link: 'https://remme.io/pilot-program',
        type: 'button'
    },{
        title: 'Register',
        link: '/register',
        isLoggedIn: false
    },{
        title: 'Login',
        link: '/login',
        isLoggedIn: false
    },{
        title: false,
        type: 'avatar',
        isLoggedIn: true,
        items:[{
            title: 'Revoke',
            link: '/revoke',
        },{
            title: 'Logout',
            type:'logout',
        }]
    },
];

class NavBar extends Component {
  render() {
    const { isLoggedIn, name, logout } = this.props;
    return (
      <div className="nav">
        <div className="nav__holder">
          <Link to="/" className="nav__logo">
              <Logo />
          </Link>
          <ul className={cn("nav__items", { "in_center": isLoggedIn })}>
            { NavigationItems.map( item =>
              <NavigationItem
                item={item}
                isLoggedIn={isLoggedIn}
                logout={logout}
                name={name}
              />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

//----------------------------------------------------------------------------------------------------------------------

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

//----------------------------------------------------------------------------------------------------------------------

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  userId: state.auth.userId,
  name: state.auth.name
});

//----------------------------------------------------------------------------------------------------------------------

export default connect(mapStateToProps, { logout })(NavBar)
