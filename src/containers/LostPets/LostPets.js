import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import Pet from '../../components/Pet'

class LostPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      lostPets: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:8000/lost_pets')
      .then((response) => {
        console.log('Success response: ', response.data);
        this.setState({
          loading: false,
          lostPets: response.data
        })

      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  }


  render() {
    const listPets = this.state.lostPets.map((pet) => {
      return (
        <Pet pet={pet} />
      )
    })
    return (
      listPets
    );
  }
}

const mapStateToProps = state => {
  return {
    // pets: lostPets.lost_pets
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LostPets);