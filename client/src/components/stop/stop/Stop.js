import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import StopDetails from './StopDetails';
import StopHeader from './StopHeader';
import StopViewFilter from './StopViewFilter';
//import Stops from '../../stop/stops/Stops';
//import StopCreds from './StopCreds';
//import StopGithub from './StopGithub';
import Spinner from '../../common/Spinner';
import { getStopByStopId } from '../../../actions/stopActions';

import NavHeader from '../../layout/NavHeader';


class Stop extends Component {
  componentDidMount() {
    if (this.props.match.params.stop_id) {
      this.props.getStopByStopId(this.props.match.params.stop_id);
    }
  }

  render() {
    const { stop , loading } = this.props.stop;
    let stopContent;

    if (stop === null || loading) {
      stopContent = <Spinner />;
    } else {
      stopContent = (
        <div>
          <div className="row">
            <div className="col-md-12">
              <NavHeader stop={stop} />
            </div>
          </div>
          <StopHeader stop={stop} />
          <StopViewFilter stop={stop} />
          {/*<Days stop={stop} />*/}
        </div>
      );
    }

    return (
      <div className="stop">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{stopContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Stop.propTypes = {
  getStopByStopId: PropTypes.func.isRequired,
  stop: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  stop: state.stop
});

export default connect(mapStateToProps, { getStopByStopId })(Stop);
