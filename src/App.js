import React, { Component } from 'react';
import HomepageLayout from './layouts/HomePage'
import axios from 'axios'


class App extends Component {
  render() {
    axios.get('http://localhost:8000/lost_pets')
      .then(function (response) {
        console.log('Success response: ', response.data);
      })
      .catch(function (error) {
        console.log('Fail response: ', error);
      });
    return (
      <HomepageLayout />
    );
  }
}

export default App;
