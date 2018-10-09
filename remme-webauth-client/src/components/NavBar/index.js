import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import { Avatar, Dropdown, Icon, Menu, Button } from 'antd';

import "./style.scss";
import { logout } from "../../actions";
import { Logo } from "../index";
import { SmartLink } from "../../components";

//----------------------------------------------------------------------------------------------------------------------

const NavigationItems = [
    {
        title: 'Products',
        type: 'list',
        key: 1,
        items: [{
            title: 'Platform Overview',
            link: "https://remme.webflow.io/platform-overview",
            key: 1
        },{
            title: 'REMChain',
            link: "https://remme.io/remchain",
            key: 2
        }]
    },{
        title: 'Use Cases',
        link: 'https://remme.io/use-cases',
        key: 2,
    },{
        title: 'About us',
        link: 'https://remme.io/about-us',
        key: 3,
    },{
        title: 'Community',
        link: "https://remme.io/community",
        key: 4
    },{
        title: 'Resources',
        type: 'list',
        key: 5,
        items: [{
            title: 'Blog',
            link: "https://medium.com/remme",
            key: 1
        },{
            title: 'Knowledge Base',
            link: "https://support.remme.io/",
            key: 2
        },{
            title: 'Developers Documentation',
            link: "https://docs.remme.io/",
            key: 3
        }]
    },{
        title: 'Contact us',
        link: "https://remme.io/contact-us",
        key: 6
    },{
        title: '+ Join pilot program',
        link: 'https://remme.io/pilot-program',
        type: 'button',
        key: 7,
    },{
        title: 'Register',
        link: '/register',
        key: 8,
        isLoggedIn: false
    },{
        title: 'Login',
        link: '/login',
        key: 9,
        isLoggedIn: false
    },{
        type: 'avatar',
        key: 10,
        isLoggedIn: true,
        items:[{
            title: 'Revoke',
            link: '/revoke',
            key: 1
        },{
            title: 'Logout',
            type:'logout',
            key: 2
        }]
    },
];

const MenuItem = (props) => {
  const { link, title, type } = props.item;
  return (
    <li>
      { type === 'button' ?
          <Link className="button-blue" to={link} target="_blank">
              {title}
          </Link>
          :
          <SmartLink link={link} >
              {title}
          </SmartLink> }
    </li>
  );
}

const MenuDropDownItem = (props) => {
  const { item, isLoggedIn, name } = props;
  return (
    <Fragment>
      { item.type === 'avatar' && item.isLoggedIn === isLoggedIn ?
        <li className="avatar">
          <Avatar icon="user" />
        </li>
        :
        null
      }
      <li>
        <Dropdown
          trigger={['hover']}
          key={item.key}
          overlay={
            <Menu>
              {item.items.map( subitem =>
                subitem.type === 'logout' ?
                  <Menu.Item key={subitem.key}>
                    <span onClick={() => props.logout()}>
                      {subitem.title}
                    </span>
                  </Menu.Item>
                  :
                  <Menu.Item key={subitem.key}>
                      <SmartLink
                          link={subitem.link} >
                          {subitem.title}
                      </SmartLink>
                  </Menu.Item>
              )}
            </Menu>
          }>
          {
            item.type === 'button' ?
              <Button type={item.style}>
                  {item.title}
              </Button>
              :
              <span className="name">{ item.type === 'avatar' && item.isLoggedIn === isLoggedIn ? name : item.title } <Icon type="down" /></span>
          }
        </Dropdown>
    </li>
  </Fragment>
);
}

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
              item.isLoggedIn === isLoggedIn || item.isLoggedIn === undefined  ?
                !item.items ?
                  <MenuItem item={item}/>
                  :
                  <MenuDropDownItem
                    item={item}
                    isLoggedIn={isLoggedIn}
                    logout={logout}
                    name={name}
                  />
              :
              null
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
