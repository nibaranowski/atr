import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
import { getAllStopsByTripId } from '../../../actions/stopActions';
import StopItem from './StopItem';
//import $ from 'jquery';




  class Stops extends Component {
      componentDidMount() {
        if (this.props.trip.trip._id) {
          this.props.getAllStopsByTripId(this.props.trip.trip._id);
        }
        console.log('this props - stops: ', this.props)

      }


    render() {
      const { stops } = this.props.stop;
      //const stops = null
      let stopItems =
        <div className="align-middle">
          <Spinner />
        </div>
      if (stops) { // check if there is a stop
          stopItems = stops.map(stop => (
              <StopItem key={stop._id} stop={stop} />
          ))
      } else {
        stopItems = <p>You haven't created a trip Yet.</p>
      }



        return (
            <div className="stops">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                          {stopItems}
                        </div>
                    </div>
                    <div className="row mb-1">
                      <div className="col-md-12 pl-0">
                        <Link to={`/trip/${this.props.trip.trip._id}/create-stop`} className="btn btn-lg btn-link float-right purple-link pl-0 pr-1 pt-0 mb-1" style={{ textDecoration: 'none', paddingRight: '4px'}}>
                          <img className="vertical-align-custom pr-2 pb-1" src="/images/add-purple.png" title="add stop" style={{ maxHeight: '16px'}} alt=""/>
                          <span style={{ verticalAlign: 'center', lineHeight: '1'}}>Add Stop</span>
                        </Link>
                      </div>
                    </div>
                </div>
            </div>


        );
    }
}

Stops.propTypes = {
  getAllStopsByTripId: PropTypes.func.isRequired,
  trip: PropTypes.object.isRequired,
  stop: PropTypes.object.isRequired,
  stop_actual: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  trip: state.trip,
  stop: state.stop,
  stop_actual: state.stop
});

export default connect(mapStateToProps, { getAllStopsByTripId })(Stops);
