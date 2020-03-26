import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';
//import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
//import InputGroup from '../../common/InputGroup';
//import SelectListGroup from '../../common/SelectListGroup';
import { createDay, getDayByDayId } from '../../../actions/dayActions';
import isEmpty from '../../../validation/is-empty';

class CreateDay extends Component {
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
      // dayProfile: {},
      // days: {},
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getDayByDayId();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.day.day) {
      const day = nextProps.day.day;
// {/*
//       // Bring skills array back to CSV
//       const skillsCSV = day.skills.join(',');*/}

      // If day field doesnt exist, make empty string

      day.startLocation = !isEmpty(day.startLocation) ? day.startLocation : '';
      day.endLocation = !isEmpty(day.endLocation) ? day.endLocation : '';
      day.startTime = !isEmpty(day.startTime) ? day.startTime : '';
      day.endTime = !isEmpty(day.endTime) ? day.endTime : '';
      day.startFlight = !isEmpty(day.startFlight) ? day.startFlight : '';
      day.endFlight = !isEmpty(day.endFlight) ? day.endFlight : '';
      day.maxBudget = !isEmpty(day.maxBudget) ? day.maxBudget : '';

      // Set component fields state
      this.setState({
        handle: day.handle,
        name: day.name,
        startLocation: day.startLocation,
        endLocation: day.endLocation,
        startTime: day.startTime,
        endTime: day.endTime,
        startFlight: day.startFlight,
        endFlight: day.endFlight,
        maxBudget: day.maxBudget,
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const dayData = {
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

    this.props.createDay(dayData, this.props.history);
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
//             placeholder="Twitter Day URL"
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
//             placeholder="Linkedin Day URL"
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
              <h1 className="display-4 text-center">Edit Day</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Day Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your day URL. Typically use your Day name without space"
                />
                <TextFieldGroup
                  placeholder="* Day Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="Write your day name"
                />
                <TextFieldGroup
                  placeholder="Start Location"
                  name="startLocation"
                  value={this.state.startLocation}
                  onChange={this.onChange}
                  error={errors.startLocation}
                  info="Write your day start location"
                />
                <TextFieldGroup
                  placeholder="End Location"
                  name="endLocation"
                  value={this.state.endLocation}
                  onChange={this.onChange}
                  error={errors.endLocation}
                  info="Write your day end location"
                />
                <TextFieldGroup
                  placeholder="Start Time"
                  name="startTime"
                  value={this.state.startTime}
                  onChange={this.onChange}
                  error={errors.startTime}
                  info="Write your day start time"
                />
                <TextFieldGroup
                  placeholder="End Time"
                  name="endTime"
                  value={this.state.endTime}
                  onChange={this.onChange}
                  error={errors.endTime}
                  info="Write your day end time"
                />
                <TextFieldGroup
                  placeholder="Start Flight"
                  name="startFlight"
                  value={this.state.startFlight}
                  onChange={this.onChange}
                  error={errors.startFlight}
                  info="Write your day start flight"
                />
                <TextFieldGroup
                  placeholder="Max Budget"
                  name="maxBudget"
                  value={this.state.maxBudget}
                  onChange={this.onChange}
                  error={errors.maxBudget}
                  info="Write your day end flight"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateDay.propTypes = {
  createDay: PropTypes.func.isRequired,
  getDayByDayId: PropTypes.func.isRequired,
  day: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  day: state.day,
  errors: state.errors
});

export default connect(mapStateToProps, { createDay, getDayByDayId })(
  withRouter(CreateDay)
);
