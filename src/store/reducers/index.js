import { combineReducers } from 'redux';
import LostPetsReducer from './lost_pets_reducer';

const rootReducer = combineReducers({
  lost_pets: LostPetsReducer
})

export default rootReducer