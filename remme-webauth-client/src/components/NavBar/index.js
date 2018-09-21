import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import { Avatar, Dropdown, Icon, Menu, message } from 'antd';

import "./style.scss";
import { logout } from "../../actions";
import { Logo } from "../index";

//----------------------------------------------------------------------------------------------------------------------

class NavBar extends Component {
  menu = (
    <Menu>
      <Menu.Item key="1"><Link to="/revoke">Revoke</Link></Menu.Item>
      <Menu.Item key="2"><span onClick={() => this.props.logout()}>Logout</span></Menu.Item>
    </Menu>
  );
  products = (
    <Menu>
      <Menu.Item key="1"><Link to="https://remme.io/platform-overview" target="_blank">Platform Overview</Link></Menu.Item>
      <Menu.Item key="2"><Link to="https://remme.io/remchain" target="_blank">REMChain</Link></Menu.Item>
    </Menu>
  );
  resources = (
    <Menu>
      <Menu.Item key="1"><Link to="https://medium.com/remme/" target="_blank">Blog</Link></Menu.Item>
      <Menu.Item key="2"><Link to="https://support.remme.io/" target="_blank">Knowledge Base</Link></Menu.Item>
      <Menu.Item key="3"><Link to="https://docs.remme.io/" target="_blank">Developers Documentation</Link></Menu.Item>
    </Menu>
  );

  guestLink = (
    <Fragment>
      <li><Link className="link" to="/register">Register</Link></li>
      <li><Link className="link" to="/login">Login</Link></li>
    </Fragment>
  );

  userLink = name => (
    <Fragment>
      <li className="avatar"><Avatar icon="user" /></li>
      <li>
        <Dropdown overlay={this.menu} trigger={['click']}>
          <span className="name">{name}<Icon type="down" /></span>
        </Dropdown>
      </li>
    </Fragment>
  );

  render() {
    const { isLoggedIn, name } = this.props;

    return (
      <div className="nav">
        <div className="nav__holder">
          <Link to="/" className="nav__logo">
            <Logo />
          </Link>
          <ul className={cn("nav__items", { "in_center": isLoggedIn })}>
              <li>
                  <Dropdown overlay={this.products} trigger={['hover']}>
                      <span className="name">Products <Icon type="down" /></span>
                  </Dropdown>
              </li>
              <li><Link className="link" to="https://remme.io/use-cases" target="_blank">Use Cases</Link></li>
              <li><Link className="link" to="https://remme.io/about-us" target="_blank">About us</Link></li>
              <li><Link className="link" to="https://remme.io/community">Community</Link></li>
              <li>
                  <Dropdown overlay={this.resources} trigger={['hover']}>
                      <span className="name">Resources <Icon type="down" /></span>
                  </Dropdown>
              </li>
              <li><Link className="link" to="https://remme.io/contact-us" target="_blank">Contact us</Link></li>
              <li><Link className="button-blue" to="https://remme.io/pilot-program" target="_blank">+ Join pilot program</Link></li>
            {isLoggedIn ? this.userLink(name) : this.guestLink}
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