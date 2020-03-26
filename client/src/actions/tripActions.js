import axios from 'axios';

import {
  GET_ALL_TRIPS,
  GET_ALL_TRIPS_BY_USER_ID,
  GET_TRIP_BY_TRIP_ID,
  TRIP_LOADING,
  CLEAR_CURRENT_TRIP,
  GET_ERRORS,
  DELETE_TRIP_BY_TRIP_ID
} from './types';

// Get all trips
export const getAllTrips = () => dispatch => {
  dispatch(setTripLoading());
  axios
    .get('/api/trip/all')
    .then(res =>
      dispatch({
        type: GET_ALL_TRIPS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_TRIPS,
        payload: null
      })
    );
};

//Get all trips by user id
export const getAllTripsByUserId = user_id => dispatch => {
  dispatch(setTripLoading());
  axios
    .get(`/api/trip/user/${user_id}`)
    .then(res =>
      dispatch({
        type: GET_ALL_TRIPS_BY_USER_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_TRIPS_BY_USER_ID,
        payload: null
      })
    );
};

// Get trip by trip id
export const getTripByTripId = trip_id => dispatch => {
  dispatch(setTripLoading());
  axios
    .get(`/api/trip/${trip_id}`)
    .then(res =>
      dispatch({
        type: GET_TRIP_BY_TRIP_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TRIP_BY_TRIP_ID,
        payload: null
      })
    );
};

// Trip loading
export const setTripLoading = () => {
  return {
    type: TRIP_LOADING
  };
};

// Clear current trip
export const clearCurrentTrip = () => {
  return {
    type: CLEAR_CURRENT_TRIP
  };
};


// Create Trip
export const createTrip = (tripData, history) => dispatch => {
  axios
    .post('/api/trip', tripData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete trip by trip id
export const deleteTripByTripId = trip_id => dispatch => {
  if (window.confirm('Are you sure?')) {
    axios
      .delete(`/api/trip/${trip_id}`)
      .then(res =>
        dispatch({
          type: DELETE_TRIP_BY_TRIP_ID,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
