import { combineReducers } from 'redux';
import LostPetsReducer from './lost_pets_reducer';

const rootReducer = combineReducers({
  test: LostPetsReducer
})

export default rootReducer