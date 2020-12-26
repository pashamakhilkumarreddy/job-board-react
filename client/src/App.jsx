import React, { Component } from 'react';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <>
        <Header />
          <main>
            <Routes />
          </main>
        <Footer />
      </>
    );
  }
}

export default App;
