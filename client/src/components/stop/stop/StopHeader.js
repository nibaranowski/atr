import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
import StopItem from '../stops/StopItem';

class StopHeader extends Component {
    componentDidMount() {
    }

    render() {
        const { stop, loading } = this.props.stop;
        let stopItem;

        if (stop == null || loading) {
          stopItem = <Spinner />;
        } else {
          stopItem = <StopItem stop={stop} />
        }

    return (
      <div className="stops">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {stopItem}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// {/*<div className="row">
//   <div className="col-md-12">
//     <div className="card card-body bg-light mb-3">
//       <h3 className="text-center text-info">{firstName}'s Bio</h3>
//       <p className="lead">
//         {isEmpty(stop.bio) ? (
//           <span>{firstName} does not have a bio</span>
//         ) : (
//           <span>{stop.bio}</span>
//         )}
//       </p>
//       <hr />
//       <h3 className="text-center text-info">Skill Set</h3>
//       <div className="row">
//         <div className="d-flex flex-wrap justify-content-center align-items-center">
//           {skills}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>*/}

StopHeader.propTypes = {
  stop: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    stop: state.stop
});

export default connect(mapStateToProps)(StopHeader);