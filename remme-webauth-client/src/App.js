import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { NavBar, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
