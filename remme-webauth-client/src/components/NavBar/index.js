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

var NavigationItems = [
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
        title: 'How to use',
        link: "/how-to-use",
    },{
        title: '+ Join pilot program',
        link: 'https://remme.io/pilot-program',
        type: 'button',
        class: 'button-blue'
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
        icon: 'user',
        isLoggedIn: true,
        items:[{
            title: 'Revoke',
            link: '/revoke',
        },{
            title: 'Logout'
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
            { NavigationItems.map( item => {
                if (item.type === "avatar") {
                  item.title = name;
                  item.items[1].action = logout
                }
                if (item.isLoggedIn === isLoggedIn || item.isLoggedIn === undefined) {
                  return <NavigationItem item={item} />
                } else {
                  return false
                }
              }
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
