import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import tripReducer from './tripReducer';
import stopReducer from './stopReducer';
import dayReducer from './dayReducer';
import eventReducer from './eventReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  trip: tripReducer,
  stop: stopReducer,
  day: dayReducer,
  event: eventReducer,
});
