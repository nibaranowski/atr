import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import CompanyDetails from './CompanyDetails';
import CompanyHeader from './CompanyHeader';
import CompanyViewFilter from './CompanyViewFilter';
//import Stops from '../../stop/stops/Stops';
//import AddBox from './AddBox';
//import CompanyCreds from './CompanyCreds';
//import CompanyGithub from './CompanyGithub';
import Spinner from '../../common/Spinner';
import { getCompanyByCompanyId } from '../../../actions/company/coachActions';
import NavTree from '../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class Coach extends Component {
  componentDidMount() {
    if (this.props.match.params.coach_id) {
      this.props.getCompanyByCompanyId(this.props.match.params.coach_id);
    }
  }

  render() {
    const { coach, loading } = this.props.coach;
    let coachContent;

    if (coach === null || loading) {
      coachContent = <Spinner />;
    } else {
      coachContent = (
        <div>
          <div className="mb-4">
            {/* <CompanyHeader coach={coach} /> */}
          </div>
          <div className="mb-4 ml-2">
            {/* <CompanyViewFilter coach={coach} /> */}
          </div>
          {/* <Stops coach={coach} /> */}
          {/* <AddBox coach={coach} /> */}
        </div>
      );
    }

    return (
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-12">
                {/* <NavTree /> */}
                <div className="card">
                  <div className="card-body">
                    This is Coach page
                    {coachContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Coach.propTypes = {
  getCompanyByCompanyId: PropTypes.func.isRequired,
  coach: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  coach: state.coach
});

export default connect(mapStateToProps, { getCompanyByCompanyId })(Coach);
