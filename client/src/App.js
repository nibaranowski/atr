import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentTrip } from './actions/tripActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import NavBar from './components/layout/NavBar';
import SideBar from './components/layout/SideBar';
//import Settingsbar from './components/layout/Settingsbar';
//import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//import Dashboard from './components/dashboard/Dashboard';

import CreateTrip from './components/trip/trip-actions/CreateTrip';
import EditTrip from './components/trip/trip-actions/EditTrip';
//import AddExperience from './components/trip/trip-actions/AddExperience';
//import AddEducation from './components/trip/trip-actions/AddEducation';
import CreateStop from './components/stop/stop-actions/CreateStop';
import EditStop from './components/stop/stop-actions/EditStop';
import CreateDay from './components/day/day-actions/CreateDay';
import EditDay from './components/day/day-actions/EditDay';
import CreateEvent from './components/event/event-actions/CreateEvent';
import EditEvent from './components/event/event-actions/EditEvent';

import Trips from './components/trip/trips/Trips';
import Trip from './components/trip/trip/Trip';
import Stops from './components/stop/stops/Stops';
import Stop from './components/stop/stop/Stop';
import Days from './components/day/days/Days';
import Day from './components/day/day/Day';
import Events from './components/event/events/Events';
import Event from './components/event/event/Event';
import NotFound from './components/not-found/NotFound';
//
// import "./assets/vendors/js/vendor.bundle.base.js"
// import "./assets/vendors/js/vendor.bundle.addons.js"
// import "./assets/js/shared/off-canvas.js"
// import "./assets/js/shared/hoverable-collapse.js"
// import ".assets/js/shared/misc.js"
// import "./assets/js/shared/settings.js"
// import "./assets/js/shared/todolist.js"
// import "./assets/js/demo_1/dashboard.js"
// import "./assets/js/shared/chart.js"
// import "./assets/js/shared/calendar.js"

//import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Trip
    store.dispatch(clearCurrentTrip());
    // Redirect to login
    window.location.href = '/login';
  }
}



class App extends Component {

  // componentDidMount () {
  //   var loadScript = function(src) {
  //     var tag = document.createElement('script');
  //     tag.async = false;
  //     tag.src = src;
  //     document.getElementsByTagName('body').appendChild(tag);
  //   }
  //   loadScript("%PUBLIC_URL%/assets/vendors/js/vendor.bundle.base.js")
  //   loadScript("%PUBLIC_URL%/assets/vendors/js/vendor.bundle.addons.js")
  //   loadScript("%PUBLIC_URL%/assets/js/shared/off-canvas.js")
  //   loadScript("%PUBLIC_URL%/assets/js/shared/hoverable-collapse.js")
  //   loadScript("%PUBLIC_URL%assets/js/shared/misc.js")
  //   loadScript("%PUBLIC_URL%/assets/js/shared/settings.js")
  //   loadScript("%PUBLIC_URL%/assets/js/shared/todolist.js")
  //   loadScript("%PUBLIC_URL%/assets/js/demo_1/dashboard.js")
  //   loadScript("%PUBLIC_URL%/assets/js/shared/chart.js")
  //   loadScript("%PUBLIC_URL%/assets/js/shared/calendar.js")
  //
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">

              {/*<Settingsbar />*/}
              <Route exact path="/" component={Landing} />
                <div className="main-content-app">
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <div className="container-fluid page-body-wrapper" style={{marginTop: '63px'}}>
                    <NavBar />
                    <SideBar />

                    <Switch>
                      <PrivateRoute
                        exact
                        path="/user/:user_id/create-trip"
                        component={CreateTrip}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/user/:user_id/edit-trip"
                        component={EditTrip}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/user/:user_id"
                        component={Trips}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id"
                        component={Trip}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/trip/:trip_id/stops"
                        component={Stops}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/stop/:stop_id"
                        component={Stop}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/stop/:stop_id/days"
                        component={Days}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/stop/:stop_id/day/:day_id"
                        component={Day}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/stop/:stop_id/day/:day_id/events"
                        component={Events}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/stop/:stop_id/day/:day_id/event/:event_id"
                        component={Event}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/create-stop"
                        component={CreateStop}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/edit-stop"
                        component={EditStop}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/stop/:stop_id/edit-day"
                        component={EditDay}
                      />
                    </Switch>

                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/stop/:stop_id/day/:day_id/edit-event"
                        component={EditEvent}
                      />
                    </Switch>


                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/stop/:stop_id/create-day"
                        component={CreateDay}
                      />
                    </Switch>


                    <Switch>
                      <PrivateRoute
                        exact
                        path="/trip/:trip_id/stop/:stop_id/day/:day_id/create-event"
                        component={CreateEvent}
                      />
                    </Switch>
                    </div>
                  <Route exact path="/not-found" component={NotFound} />

              </div>
            {/*<Footer />*/}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
