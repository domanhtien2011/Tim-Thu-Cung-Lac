import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Columns, Column } from 'bloomer'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Pet from '../../components/Pet'
import PetInfo from '../../components/PetInfo'

class LostPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      lostPets: []
    }
  }

  componentWillMount() {
    axios.get('http://192.168.1.47:5000/lost_pets')
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
        <div>
          <Column isSize="1/4" >
            <Pet pet={pet}></Pet>
          </Column>
          <Route path='../components/PetInfo.js' component={PetInfo}></Route>
        </div>
      )
    })
    return (
      <Columns isMultiline>
        {listPets}
      </Columns>
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