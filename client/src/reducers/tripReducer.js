import {
  GET_ALL_TRIPS,
  GET_ALL_TRIPS_BY_USER_ID,
  GET_TRIP_BY_TRIP_ID,
  TRIP_LOADING,
  DELETE_TRIP_BY_TRIP_ID
} from '../actions/types';

const initialState = {
    trip: null,
    trips: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
      case GET_ALL_TRIPS:
          return {
              ...state,
              trips: action.payload,
              loading: false
          }
      case GET_ALL_TRIPS_BY_USER_ID:
          return {
              ...state,
              trips: action.payload,
              loading: false
          }
      case GET_TRIP_BY_TRIP_ID:
          return {
              ...state,
              trip: action.payload,
              loading: false
          }
      case TRIP_LOADING:
          return {
              ...state,
              loading: true
          }
      case DELETE_TRIP_BY_TRIP_ID:
          return {
              ...state,
              trip: null
          }
      default:
          return state;
    }
}
