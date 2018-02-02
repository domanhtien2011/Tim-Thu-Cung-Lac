import React, { Component } from 'react';
import { connect } from 'react-redux';

import React, { Component } from 'react';

class LostPets extends Component {
  render() {
    lostPets = this.props.lostPets
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pets: lostPets.lost_pets
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LostPets);