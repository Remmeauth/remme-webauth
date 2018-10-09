import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { NavBar, Footer, InfoLink } from './components';

class App extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="App">
        { location.pathname !== "/how-to-use" ? <InfoLink /> : null }
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
