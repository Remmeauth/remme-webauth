import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Banner, TryBlock, Footer, Welcome } from '../components';

const Home = ({ isLoggedIn, name }) => (
  <Fragment>
    <Welcome name={name} />
  </Fragment>
);

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    name: state.auth.name
  }
};

export default connect(mapStateToProps)(Home);
