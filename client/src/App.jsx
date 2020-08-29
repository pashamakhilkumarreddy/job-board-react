import React, { Component } from 'react';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { AuthContext } from './context';


class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      token: null,
      userId: null,
    }
  }
  render() {
    return (
      <>
        <AuthContext.Provider>
          <Header />
            <main>
            </main>
          <Footer />
        </AuthContext.Provider>
      </>
    );
  }
}

export default App;
