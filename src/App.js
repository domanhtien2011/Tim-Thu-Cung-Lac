import React, { Component } from 'react';
import HomepageLayout from './layouts/HomePage'
import LostPets from './containers/LostPets/LostPets'


class App extends Component {
  render() {
    return (
      <div>
        <HomepageLayout />
      </div>
    );
  }
}

export default App;
