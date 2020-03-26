import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import momentjs  from 'moment';
import pluralize  from 'pluralize';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../../validation/is-empty';
import Days from '../../day/days/Days';
import { deleteStopByStopId } from '../../../actions/stopActions';
import $ from 'jquery';

class StopItem extends Component {

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
    this.props.deleteStopByStopId(this.props.stop._id);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
      const { displayDays } = this.state;
      const { stop } = this.props;
      const headerBool = this.props.headerBool
      var endTime = momentjs(stop.endTime)
      var startTime = momentjs(stop.startTime)

      let daysInput;

      if(displayDays) {
        daysInput = (
          <Days stop={stop} order={stop.order}/>
        )
      }

      return (
          <div className="accordion accordion-solid-bg" id="accordion-5" role="tablist">
            <div className="card">
              <div className="card-header" role="tab" id="headingOne-5">
                <h5 className="mb-0">
                  <a data-toggle="collapse" href="#collapseOne-5" aria-expanded="false" aria-controls="collapseOne-5">Stop {stop.order}</a>
                </h5>
              </div>
              <div id="collapseOne-5" className="collapse" role="tabpanel" aria-labelledby="headingOne-5" data-parent="#accordion-5">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p>Content 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        // <div className="stopItem mb-2">
        //   <div className="card-purple card-body bg-purple mb-3 pl-4 pr-4" style={{paddingTop: '13px', paddingBottom: '13px'}}>
        //     <div className="row">
        //       <div className="col-md-2 vcenter pt-2">
        //         <div className="stop-font pl-0 pr-0 ml-0 mr-0 pb-0 float-left vcenter" >
        //           <button
        //             type="button"
        //             className="btn btn-sm btn-link-white mr-2 pr-0 pl-0 pt-0"
        //             style={{ width: '100%'}}
        //             onClick={() => {
        //               this.setState(prevState => ({
        //                 displayDays: !prevState.displayDays
        //               }));
        //             }}
        //           >
        //             <img src="/images/dropdown-white.png" className="mr-3" style={{ maxHeight: '8px', width: 'auto'}}/>
        //           </button>
        //         </div>
        //         <div className="stop-font font-weight-bold pl-0 pr-0 ml-0 mr-0">
        //           Stop {stop.order}
        //         </div>
        //       </div>
        //       <div className="col-md-1 vcenter">
        //         <span className="stop-font pl-0 pr-0 ml-0 mr-0">
        //           {stop.startLocation.substring(0, 6)}
        //           { stop.startLocation.substring(0, 6).length == stop.startLocation.length ? null : ".."}
        //         </span>
        //       </div>
        //       <div className="col-md-3 vcenter">
        //         <span className="stop-font pl-0 pr-0 ml-0 mr-0">
        //           <Moment format="MMM Do">{stop.startTime}</Moment> - <Moment format="MMM Do">{stop.endTime}</Moment>
        //           {" "}({endTime.diff(startTime, 'days')+1} {pluralize('day', endTime.diff(startTime, 'days')+1)})
        //         </span>
        //       </div>
        //       <div className="col-md-1 vcenter">
        //         <span className="stop-font pl-0 pr-0 ml-0 mr-0">
        //           Relax
        //         </span>
        //       </div>
        //       <div className="col-md-1 vcenter">
        //         <span className="stop-font pl-0 pr-0 ml-0 mr-0">
        //           {stop.price}
        //         </span>
        //       </div>
        //       <div className="col-md-1 vcenter">
        //         <span className="stop-font pl-0 pr-0 ml-0 mr-0">
        //           {stop.pctBooked}
        //         </span>
        //       </div>
        //       <div className="col-md-3 vcenter">
        //         <div className="stop-font pl-0 pr-0 ml-0 mr-0 float-right pt-1">
        //           <button
        //             onClick={this.onDeleteClick.bind(this)}
        //             className="btn btn-sm btn-link-white mr-2 pr-0 pl-0"
        //             style={{ maxWidth: '20px'}}
        //           >
        //           <img src="/images/delete-white.png" className="mr-0" style={{ width: '100%'}}/>
        //         </button>
        //           <Link to="/" className="btn btn-sm btn-link-white mr-2 pr-0 pl-0" style={{ maxWidth: '20px'}}>
        //             <img src="/images/edit-white.png" className="mr-0" style={{ width: '100%'}}/>
        //           </Link>
        //           <Link to="/" className="btn btn-sm btn-link-white mr-0 pr-0 pl-0" style={{ maxWidth: '20px'}}>
        //             <img src="/images/toggle-white.png" className="mr-0" style={{ width: '100%'}}/>
        //           </Link>
        //         </div>
        //         <div className="stop-font pl-0 pr-0 ml-0 mr-4 float-right">
        //           <Link to="/" className="btn btn-lg btn-info-inverted white-button float-right" style={{ color: '#5d38db'}}>
        //             Book
        //           </Link>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="days">
        //     {daysInput}
        //   </div>
        // </div>
      );
  }
}

StopItem.propTypes = {
  deleteStopByStopId: PropTypes.func.isRequired,
  stop: PropTypes.object.isRequired
}

export default connect(null, { deleteStopByStopId })(StopItem);
