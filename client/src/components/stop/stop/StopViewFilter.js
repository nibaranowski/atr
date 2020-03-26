import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Spinner from '../../common/Spinner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
//import StopItem from '../stops/StopItem';

class StopViewFilter extends Component {
    render() {
      //const { stop } = this.props;
      return (
        <div className="row">
          <Link to="/" className="btn btn-link mb-3 float-left ml-4 mt-0 pt-0 pl-2 navtree-custom">
            <span>List View</span>
            <img className="vertical-align-custom pl-2 pb-1" src="/images/filter-arrow.png" title="filter" style={{ maxWidth: '16px'}} alt=""/>
          </Link>
        </div>
      );
  }
}


StopViewFilter.propTypes = {
  stop: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    stop: state.stop
});

export default connect(mapStateToProps)(StopViewFilter);
