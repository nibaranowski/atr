import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import DayDetails from './DayDetails';
import DayHeader from './DayHeader';
import DayViewFilter from './DayViewFilter';
import Days from '../../day/days/Days';
//import DayCreds from './DayCreds';
//import DayGithub from './DayGithub';
import Spinner from '../../common/Spinner';
import { getDayByDayId } from '../../../actions/dayActions';

import NavHeader from '../../layout/NavHeader';


class Day extends Component {
  componentDidMount() {
    if (this.props.match.params.day_id) {
      this.props.getDayByDayId(this.props.match.params.day_id);
    }
  }

  render() {
    const { day , loading } = this.props.day;
    let dayContent;

    if (day === null || loading) {
      dayContent = <Spinner />;
    } else {
      dayContent = (
        <div>
          <div className="row">
            <div className="col-md-12">
              <NavHeader day={day} />
            </div>
          </div>
          <DayHeader day={day} />
          <DayViewFilter day={day} />
          <Days day={day} />
        </div>
      );
    }

    return (
      <div className="day">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{dayContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Day.propTypes = {
  getDayByDayId: PropTypes.func.isRequired,
  day: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  day: state.day
});

export default connect(mapStateToProps, { getDayByDayId })(Day);
