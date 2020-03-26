import React, { Component } from 'react';
import isEmpty from '../../../validation/is-empty';

class DayDetails extends Component {
  render() {
    const { day } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                {/*<img
                  className="rounded-circle"
                  src={day.user.avatar}
                  alt=""
                />*/}
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{day.user.name}</h1>
              <p className="lead text-center">
                {day.status}{' '}
                {isEmpty(day.company) ? null : (
                  <span>at {day.company}</span>
                )}
              </p>
              {isEmpty(day.location) ? null : <p>{day.location}</p>}
              <p>
                {isEmpty(day.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={day.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(day.social && day.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={day.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(day.social && day.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={day.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(day.social && day.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={day.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}

                {isEmpty(day.social && day.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={day.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(day.social && day.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={day.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DayDetails;
