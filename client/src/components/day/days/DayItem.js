import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import momentjs  from 'moment';
import pluralize  from 'pluralize';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import isEmpty from '../../../validation/is-empty';
import Days from '../../day/days/Days';
import { deleteDayByDayId } from '../../../actions/dayActions';
import $ from 'jquery';

class DayItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayDays: false,
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
      const { displayDays } = this.state;
      const { day } = this.props;
      //const headerBool = this.props.headerBool
      var endTime = momentjs(day.endTime)
      var startTime = momentjs(day.startTime)

      let daysInput;

      if(displayDays) {
        daysInput = (
          <Days day={day} order={day.order}/>
        )
      }
      let headerInput;

      if(day.order === 0) {
        headerInput = null
      } else {
        headerInput = null
      }

      return (
          <div className="accordion accordion-solid-bg" id={`accordion-5-${day.order}`} role="tablist">
            <div className="card">
              <div className="card-header" role="tab" id={`headingOne-5-${day.order}`}>
                <h5 className="mb-0">
                  <a
                    className="align-self-center"
                    data-toggle="collapse"
                    href={`#collapseOneDay-5-${day.order}`}
                    aria-expanded="false"
                    aria-controls={`collapseOne-5-${day.order}`}
                    style={{overflow: 'visible'}}
                    onClick={() => {
                      this.setState(prevState => ({
                        displayDays: !prevState.displayDays
                      }));
                    }}
                  >
                    <div className="col-12">
                      <table className="table">
                        {headerInput}
                        <tbody>
                          <tr>
                            <td className="w-10 font-weight-bold border-0">Day {day.order+1}</td>
                            <td className="w-30 border-0" style={{minWidth:'66px'}}>
                              {day.startLocation.substring(0, 6)}
                              {day.startLocation.substring(0, 6).length === day.startLocation.length ? null : ".."}
                            </td>
                            <td className="w-10 border-0">
                              <Moment format="MMM Do">{day.startTime}</Moment> - <Moment format="MMM Do">{day.endTime}</Moment>
                              {" "}({endTime.diff(startTime, 'days')+1} {pluralize('day', endTime.diff(startTime, 'days')+1)})
                            </td>
                            <td className="w-10 border-0">Relax</td>
                            <td className="w-10 border-0">{day.price} USD</td>
                            <td className="w-10 border-0">{day.pctBooked} %</td>
                            <td className="w-20 border-0">
                              <div className="btn-group float-right mr-2">
                                <Link to={`/`} className="btn btn-success" style={{color: 'white'}}>
                                  Book
                                </Link>
                                <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton1">
                                  <Link className="dropdown-item" to={`/`}>Edit</Link>
                                  <a className="dropdown-item" onClick={this.onDeleteClick.bind(this)} href="/#">Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                   </a>
                </h5>
              </div>
              <div id={`collapseOne-5-${day.order}`} className="collapse" role="tabpanel" aria-labelledby={`headingOne-5-${day.order}`} data-parent={`#accordion-5-${day.order}`}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      {daysInput}
                    </div>
                  </div>
                </div>
              </div>
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
