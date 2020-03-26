import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
import { getAllDaysByStopId } from '../../../actions/dayActions';
import DayItem from './DayItem';

class Days extends Component {

    constructor(props) {
      super(props)
      const { order } = this.props;
      this.state = {
        stopTemp: this.props.stop.stops[order-1]
      }
    }

    componentDidMount() {
      const { order } = this.props;
      const stop_id = this.props.stop.stops[order]._id;

      if (stop_id) {
        this.props.getAllDaysByStopId(stop_id)
        //this.props.getStopByStopId(stop_id)
      }

      console.log('this props - days: ', this.props)
    }

    render() {
      const { days } = this.props.day;
      //const days = null
      let dayItems = <Spinner />
      if (days) { // check if there is a day
          dayItems = days.map(day => (
              <DayItem key={day._id} day={day} />
          ))
      } else {
        dayItems = <p>You haven't created a day yet.</p>
      }


        return (

            <div className="days">
                <div className="container">
                    <div className="row">
                      <div className="col-md-12 pl-0 pr-0">
                        {dayItems}
                      </div>
                    </div>
                    <div className="row mb-1">
                      <div className="col-md-12 pr-1 pl-0">
                        {/* <Link to={`/trip/${this.props.trip.trip._id}/stop/${this.state.stopTemp._id}/create-day`} className="btn btn-lg btn-link float-right grey-link pl-0 pr-0 pt-0 mb-1" style={{ textDecoration: 'none'}}>
                          <img className="vertical-align-custom pr-2 pb-1" src="/images/add-dark.png" title="add day" style={{ maxHeight: '16px'}}/>
                          <span style={{ verticalAlign: 'center', lineHeight: '1'}}>Add Day</span>
                        </Link> */}
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

Days.propTypes = {
  getAllDaysByStopId: PropTypes.func.isRequired,
  trip: PropTypes.object.isRequired,
  stop: PropTypes.object.isRequired,
  day: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  trip: state.trip,
  stop: state.stop,
  day: state.day
});

export default connect(mapStateToProps, { getAllDaysByStopId })(Days);
