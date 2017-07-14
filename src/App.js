import React, { Component } from 'react';
import './App.css';
import {Container } from 'reactstrap'

import ThankYou from './thankyou/ThankYou'

class App extends Component {
  render() {
    return (
      <Container>
      <ThankYou/>
      </Container>
    );
  }
}

export default App;
