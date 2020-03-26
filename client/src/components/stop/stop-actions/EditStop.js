import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';
//import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
//import InputGroup from '../../common/InputGroup';
//import SelectListGroup from '../../common/SelectListGroup';
import { createStop, getStopByStopId } from '../../../actions/stopActions';
import isEmpty from '../../../validation/is-empty';

class CreateStop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      name: '',
      startLocation: '',
      endLocation: '',
      startTime: '',
      endTime: '',
      startFlight: '',
      endFlight: '',
      maxBudget: '',
      // stopProfile: {},
      // stops: {},
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getStopByStopId();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.stop.stop) {
      const stop = nextProps.stop.stop;
// {/*
//       // Bring skills array back to CSV
//       const skillsCSV = stop.skills.join(',');*/}

      // If stop field doesnt exist, make empty string

      stop.startLocation = !isEmpty(stop.startLocation) ? stop.startLocation : '';
      stop.endLocation = !isEmpty(stop.endLocation) ? stop.endLocation : '';
      stop.startTime = !isEmpty(stop.startTime) ? stop.startTime : '';
      stop.endTime = !isEmpty(stop.endTime) ? stop.endTime : '';
      stop.startFlight = !isEmpty(stop.startFlight) ? stop.startFlight : '';
      stop.endFlight = !isEmpty(stop.endFlight) ? stop.endFlight : '';
      stop.maxBudget = !isEmpty(stop.maxBudget) ? stop.maxBudget : '';

      // Set component fields state
      this.setState({
        handle: stop.handle,
        name: stop.name,
        startLocation: stop.startLocation,
        endLocation: stop.endLocation,
        startTime: stop.startTime,
        endTime: stop.endTime,
        startFlight: stop.startFlight,
        endFlight: stop.endFlight,
        maxBudget: stop.maxBudget,
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const stopData = {
      handle: this.state.handle,
      name: this.state.this.stateName,
      startLocation: this.state.startLocation,
      endLocation: this.state.endLocation,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      startFlight: this.state.startFlight,
      endFlight: this.state.endFlight,
      maxBudget: this.state.maxBudget,
    };

    this.props.createStop(stopData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

//     {/*let socialInputs;
//
//     if (displaySocialInputs) {
//       socialInputs = (
//         <div>
//           <InputGroup
//             placeholder="Twitter Stop URL"
//             name="twitter"
//             icon="fab fa-twitter"
//             value={this.state.twitter}
//             onChange={this.onChange}
//             error={errors.twitter}
//           />
//
//           <InputGroup
//             placeholder="Facebook Page URL"
//             name="facebook"
//             icon="fab fa-facebook"
//             value={this.state.facebook}
//             onChange={this.onChange}
//             error={errors.facebook}
//           />
//
//           <InputGroup
//             placeholder="Linkedin Stop URL"
//             name="linkedin"
//             icon="fab fa-linkedin"
//             value={this.state.linkedin}
//             onChange={this.onChange}
//             error={errors.linkedin}
//           />
//
//           <InputGroup
//             placeholder="YouTube Channel URL"
//             name="youtube"
//             icon="fab fa-youtube"
//             value={this.state.youtube}
//             onChange={this.onChange}
//             error={errors.youtube}
//           />
//
//           <InputGroup
//             placeholder="Instagram Page URL"
//             name="instagram"
//             icon="fab fa-instagram"
//             value={this.state.instagram}
//             onChange={this.onChange}
//             error={errors.instagram}
//           />
//         </div>
//       );
//     }*/}
//
//     {/*// Select options for status
//     const options = [
//       { label: '* Select Professional Status', value: 0 },
//       { label: 'Developer', value: 'Developer' },
//       { label: 'Junior Developer', value: 'Junior Developer' },
//       { label: 'Senior Developer', value: 'Senior Developer' },
//       { label: 'Manager', value: 'Manager' },
//       { label: 'Student or Learning', value: 'Student or Learning' },
//       { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
//       { label: 'Intern', value: 'Intern' },
//       { label: 'Other', value: 'Other' }
//     ];
// */}
    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Stop</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Stop Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your stop URL. Typically use your Stop name without space"
                />
                <TextFieldGroup
                  placeholder="* Stop Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="Write your stop name"
                />
                <TextFieldGroup
                  placeholder="Start Location"
                  name="startLocation"
                  value={this.state.startLocation}
                  onChange={this.onChange}
                  error={errors.startLocation}
                  info="Write your stop start location"
                />
                <TextFieldGroup
                  placeholder="End Location"
                  name="endLocation"
                  value={this.state.endLocation}
                  onChange={this.onChange}
                  error={errors.endLocation}
                  info="Write your stop end location"
                />
                <TextFieldGroup
                  placeholder="Start Time"
                  name="startTime"
                  value={this.state.startTime}
                  onChange={this.onChange}
                  error={errors.startTime}
                  info="Write your stop start time"
                />
                <TextFieldGroup
                  placeholder="End Time"
                  name="endTime"
                  value={this.state.endTime}
                  onChange={this.onChange}
                  error={errors.endTime}
                  info="Write your stop end time"
                />
                <TextFieldGroup
                  placeholder="Start Flight"
                  name="startFlight"
                  value={this.state.startFlight}
                  onChange={this.onChange}
                  error={errors.startFlight}
                  info="Write your stop start flight"
                />
                <TextFieldGroup
                  placeholder="Max Budget"
                  name="maxBudget"
                  value={this.state.maxBudget}
                  onChange={this.onChange}
                  error={errors.maxBudget}
                  info="Write your stop end flight"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateStop.propTypes = {
  createStop: PropTypes.func.isRequired,
  getStopByStopId: PropTypes.func.isRequired,
  stop: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  stop: state.stop,
  errors: state.errors
});

export default connect(mapStateToProps, { createStop, getStopByStopId })(
  withRouter(CreateStop)
);
