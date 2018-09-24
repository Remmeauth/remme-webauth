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

class NavBar extends Component {
  render() {
    const { isLoggedIn, name } = this.props;
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
                                item.type === 'button' ?
                                    <li>
                                        <Link
                                            className="button-blue"
                                            to={item.link}
                                            target="_blank"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                    :
                                    <li>
                                        <SmartLink
                                            link={item.link} >
                                            {item.title}
                                        </SmartLink>
                                    </li>
                                :
                                item.type === 'avatar' && item.isLoggedIn === isLoggedIn ?
                                    <Fragment>
                                        <li className="avatar"><Avatar icon="user" /></li>
                                        <li>
                                            <Dropdown
                                                overlay={
                                                <Menu>
                                                    {item.items.map( subitem =>
                                                        subitem.type === 'logout' ?
                                                            <Menu.Item key={subitem.key}><span onClick={() => this.props.logout()}>{subitem.title}</span></Menu.Item>
                                                            :
                                                            <Menu.Item key={subitem.key}>
                                                                <SmartLink
                                                                    link={subitem.link} >
                                                                    {subitem.title}
                                                                </SmartLink>
                                                            </Menu.Item>
                                                    )}
                                                </Menu>
                                            }
                                                trigger={['hover']}>
                                                <span className="name">{name}<Icon type="down" /></span>
                                            </Dropdown>
                                        </li>
                                    </Fragment>
                                    :
                                    <li>
                                        <Dropdown
                                            key={item.key}
                                            overlay={
                                                <Menu>
                                                    {item.items.map( subitem =>
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
                                                    <span className="name">{item.title} <Icon type="down" /></span>
                                            }
                                        </Dropdown>
                                    </li>
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