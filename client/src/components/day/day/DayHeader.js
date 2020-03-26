import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
import DayItem from '../days/DayItem';

class DayHeader extends Component {
    componentDidMount() {
    }

    render() {
        const { day, loading } = this.props.day;
        let dayItem;

        if (day == null || loading) {
          dayItem = <Spinner />;
        } else {
          dayItem = <DayItem day={day} />
        }

    return (
      <div className="days">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {dayItem}
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
//         {isEmpty(day.bio) ? (
//           <span>{firstName} does not have a bio</span>
//         ) : (
//           <span>{day.bio}</span>
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

DayHeader.propTypes = {
  day: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    day: state.day
});

export default connect(mapStateToProps)(DayHeader);
