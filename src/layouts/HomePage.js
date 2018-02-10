import React, { Component } from 'react';
import NavBar from './NavBar'
import LostPets from '../containers/LostPets/LostPets'
import { Container } from 'bloomer';

class HomePage extends Component {


  render() {
    return (
      <div>
        <NavBar />
        <Container isFluid style={{ marginTop: 10 }}>
          <LostPets />
        </Container>
      </div>
    );
  }
}

export default HomePage;