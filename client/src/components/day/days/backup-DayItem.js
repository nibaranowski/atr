import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import momentjs  from 'moment';
import pluralize  from 'pluralize';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../../validation/is-empty';
import Events from '../../event/events/Events';
import { deleteDayByDayId } from '../../../actions/dayActions';
import $ from 'jquery';

class DayItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayEvents: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    $('button').on('click', function() {
      $('.days').fadeIn()
    }) // add timeout
  }

  onDeleteClick(e) {
    this.props.deleteDayByDayId(this.props.day._id);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
      const { displayEvents } = this.state;
      const { day } = this.props;
      const headerBool = this.props.headerBool
      var endTime = momentjs(day.endTime)
      var startTime = momentjs(day.startTime)

      let eventsInput;

      if(displayEvents) {
        eventsInput = (
          <Events day={day} order={day.order}/>
        )
      }

      return (
        <div className="dayItem">
          <div className="card-day card-body bg-light mb-2 pl-4 pr-4" style={{paddingTop: '13px', paddingBottom: '13px', fontSize: '14px'}}>
            <div className="row">
              <div className="col-md-2 vcenter pt-2">
                <div className="day-font pl-0 pr-0 ml-0 mr-0 pb-0 float-left vcenter" >
                  <button
                    type="button"
                    className="btn btn-sm btn-link-white mr-2 pr-0 pl-0 pt-0"
                    style={{ width: '100%'}}
                    onClick={() => {
                      this.setState(prevState => ({
                        displayEvents: !prevState.displayEvents
                      }));
                    }}
                  >
                    <img src="/images/dropdown-grey.png" className="mr-3" style={{ maxHeight: '8px', width: 'auto'}}/>
                  </button>
                </div>
                <div className="day-font font-weight-bold pl-0 pr-0 ml-0 mr-0">
                  Day {day.order}
                </div>
              </div>
              <div className="col-md-1 vcenter">
                <span className="day-font pl-0 pr-0 ml-0 mr-0">
                  {day.startLocation.substring(0, 6)}
                  { day.startLocation.substring(0, 6).length == day.startLocation.length ? null : ".."}
                </span>
              </div>
              <div className="col-md-3 vcenter">
                <span className="day-font pl-0 pr-0 ml-0 mr-0">
                  <Moment format="MMM Do">{day.startTime}</Moment> - <Moment format="MMM Do">{day.endTime}</Moment>
                </span>
              </div>
              <div className="col-md-1 vcenter">
                <span className="day-font pl-0 pr-0 ml-0 mr-0">
                  Relax
                </span>
              </div>
              <div className="col-md-1 vcenter">
                <span className="day-font pl-0 pr-0 ml-0 mr-0">
                  {day.price}
                </span>
              </div>
              <div className="col-md-1 vcenter">
                <span className="day-font pl-0 pr-0 ml-0 mr-0">
                  {day.pctBooked}
                </span>
              </div>
              <div className="col-md-3 vcenter">
                <div className="day-font pl-0 pr-0 ml-0 mr-0 float-right" style={{paddingTop: '2px'}}>
                  <button
                    onClick={this.onDeleteClick.bind(this)}
                    className="btn btn-sm btn-link-white mr-2 pr-0 pl-0 vcenter"
                    style={{ maxWidth: '20px'}}
                  >
                    <img src="/images/delete-grey.png" className="mr-0 vcenter" style={{ width: '100%'}}/>
                  </button>
                  <Link to="/" className="btn btn-sm btn-link-white mr-2 pr-0 pl-0" style={{ maxWidth: '20px'}}>
                    <img src="/images/edit-grey.png" className="mr-0" style={{ width: '100%'}}/>
                  </Link>
                  <Link to="/" className="btn btn-sm btn-link-white mr-0 pr-0 pl-0" style={{ maxWidth: '20px'}}>
                    <img src="/images/toggle-grey.png" className="mr-0" style={{ width: '100%'}}/>
                  </Link>
                </div>
                <div className="day-font pl-0 pr-0 ml-0 mr-4 float-right">
                  <Link to="/" className="btn btn-lg btn-info button float-right" >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="events">
            {eventsInput}
          </div>
        </div>
      );
  }
}

DayItem.propTypes = {
  deleteDayByDayId: PropTypes.func.isRequired,
  day: PropTypes.object.isRequired
}

export default connect(null, { deleteDayByDayId })(DayItem);
