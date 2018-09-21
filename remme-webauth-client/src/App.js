import React, { Component } from 'react';

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

export default App;
