import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

    render() {

        return (
          <div className="container-scroller landing-page">
               <div className="container-fluid top-banner">
                 <nav className="navbar navbar-expand-lg bg-transparent">
                   <div className="row flex-grow">
                     <div className="col-md-8 d-lg-flex flex-row mx-auto">
                       <a className="navbar-brand" href="../../index.html">
                         <img src="../../../assets/images/logo_star_white.svg" alt="logo" /> </a>
                       <button className="navbar-toggler collapsed float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon ti ti-menu text-white" />
                       </button>
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav ml-auto">
                           {/*<li className="nav-item">
                             <a className="nav-link btn btn-link" href="../../index.html">HOME</a>
                           </li>*/}
                           <li className="nav-item">
                             <Link className="nav-link btn btn-link" to="/register" >SIGN UP</Link>
                           </li>
                           <li className="nav-item">
                             <Link className="nav-link btn btn-link" to="/login">LOGIN</Link>
                           </li>
                         </ul>
                       </div>
                     </div>
                   </div>
                 </nav>
                 <div className="row top-banner-content">
                   <div className="col-md-8 mx-auto">
                     <div className="row">
                       <div className="col-lg-7">
                         <h1 className="mr-2 text-white"> Manage employees from application to separation. </h1>
                         <h3 className="font-weight-light text-white"> Manage employees end-to-end in one app. </h3>
                         <div className="mt-5">
                           {/*<button className="btn btn-primary btn-lg mr-2">LEARN MORE</button>*/}
                           <Link to="/register" >
                            <button className="btn btn-danger btn-lg">GET STARTED</button>
                           </Link>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="container-fluid middle-section bg-white">
                 <div className="row">
                   <div className="col-md-8 mx-auto">
                     <div className="row">
                       <div className="col-md-4 grid-margin stretch-card">
                         <div className="m-2">
                           <div className="card card-icon-top">
                             <div className="card-body">
                               <img src="../../../assets/images/samples/bootstrap-stack.png" className="card-icon" alt=""/>
                               <h4>Bootstrap 4</h4>
                               <p className="card-text"> Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. </p>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin stretch-card">
                         <div className="m-2">
                           <div className="card card-icon-top">
                             <div className="card-body">
                               <img alt="" src="../../../assets/images/samples/angular-4.png" className="card-icon" />
                               <h4>Angular 5</h4>
                               <p className="card-text"> Angular is a platform that makes it easy to build applications with the web. </p>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin stretch-card">
                         <div className="m-2">
                           <div className="card card-icon-top">
                             <div className="card-body">
                               <img alt="" src="../../../assets/images/samples/html5.png" className="card-icon" />
                               <h4>Static HTML</h4>
                               <p className="card-text"> This is built with Jquery and static HTML that can be integrated to any framewroks </p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="row mt-5 mb-5">
                       <div className="col-md-8 mx-auto">
                         <h3>Choose Your Demo</h3>
                         <p className="font-weight-light"> This template comes with AngularJs and HTML5/jQuery version, which helps to choose the best dashboard solution to fit your project needs. </p>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-4">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/dashboard.png" />
                             <div className="card-body py-3 border-top">
                               <label className="badge badge-warning">New</label>
                               <h6 className="font-weight-normal mb-0">Dashboard</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/widgets.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">Widgets</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/modal.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">Modals</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/e-commerce.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">E-commerce</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/email.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">Email</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/charts.png" />
                             <div className="card-body py-3 border-top">
                               <label className="badge badge-success">New</label>
                               <h6 className="font-weight-normal mb-0">Charts</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/editors.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">Code Editors</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/forms.png" />
                             <div className="card-body py-3 border-top">
                               <label className="badge badge-primary">New</label>
                               <h6 className="font-weight-normal mb-0">Forms</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/popup.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">Popups</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="container-fluid bottom-section">
                 <div className="row">
                   <div className="col-md-8 mx-auto">
                     <h3>Top Features</h3>
                     <div className="feature-list">
                       <div className="row feature-list-row">
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-briefcase" />
                           <h4>Lots of widgtes</h4>
                           <p className="feature-description">Wide range of Widgets are available with this Package.</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-target" />
                           <h4>Bootstrap 4</h4>
                           <p className="feature-description">It is made with bootstrap 4 framework</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-mobile" />
                           <h4>Fully Responsive</h4>
                           <p className="feature-description">Fully responsive accross all devices</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-face-smile" />
                           <h4>3000+ icon fonts</h4>
                           <p className="feature-description">Lots of icon fonts are included in the package</p>
                         </div>
                       </div>
                       <div className="row feature-list-row">
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-layout-sidebar-left" />
                           <h4>Dark and light sidebars</h4>
                           <p className="feature-description">Included Dark and Light SideBar for getting desired look and feel.</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-blackboard" />
                           <h4>Easy to customize</h4>
                           <p className="feature-description">Customization will be easy as we understand your pain.</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-paint-bucket" />
                           <h4>6 theme colors</h4>
                           <p className="feature-description">We have included 6 pre-defined color schemes with this admin.</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-receipt" />
                           <h4>Detailed documentation</h4>
                           <p className="feature-description">We have made detailed documentation, for ease of use.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <footer className="container-fluid footer">
                 <div className="row pb-5 text-white footer-top">
                   <div className="col-md-8 mx-auto">
                     <div className="row">
                       <div className="col-md-3">
                         <img src="../../../assets/images/logo_star_white.svg" className="brand-logo" alt="logo" />
                         <div className="d-flex flex-row footer-social-icons">
                           <i className="ti-facebook bg-facebook" />
                           <i className="ti-google bg-google" />
                           <i className="ti-dribbble bg-dribbble" />
                           <i className="ti-twitter-alt bg-twitter" />
                         </div>
                       </div>
                       <div className="col-md-6">
                         <div className="row contact-details">
                           <div className="col-12 d-flex mb-3">
                             <i className="ti-mobile mr-4" />
                             <h6 className="font-weight-normal">(0000) 1234 5678</h6>
                           </div>
                           <div className="col-12 d-flex mb-3">
                             <i className="ti-settings mr-4" />
                             <h6 className="font-weight-normal">support@staradmin.org</h6>
                           </div>
                         </div>
                         <ul className="nav mt-3">
                           <li className="nav-item">
                             <a className="nav-link" href="/#">Demos</a>
                           </li>
                           <li className="nav-item">
                             <a className="nav-link" href="/#">Features</a>
                           </li>
                           <li className="nav-item">
                             <a className="nav-link" href="/#">Support</a>
                           </li>
                           <li className="nav-item">
                             <a className="nav-link" href="/#">Documentation</a>
                           </li>
                         </ul>
                       </div>
                       <div className="col-md-3">
                         <h6>Newsletter</h6>
                         <p>To get the latest news from us please subscribe your email.</p>
                         <div className="mt-3">
                           <input type="email" className="form-control" placeholder="Enter your email" /> </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="row py-4 footer-bottom">
                   <div className="col-md-8 mx-auto">
                     <div className="container-fluid clearfix">
                       <span className="d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018
                         <a href="/#">bootstrapdash</a>. All rights reserved.</span>
                       <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with
                         <i className="mdi mdi-heart text-danger" />
                       </span>
                     </div>
                   </div>
                 </div>


                 {/* this is where star admin goes */}
                 <div className="star-admin">
                  <div className="main-panel">
                    <div className="container-scroller">
                      {/* partial:../../partials/_navbar.html */}
                      {/* <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                          <a className="navbar-brand brand-logo" href="../../index.html">
                            <img src="../../../assets/images/logo.svg" alt="logo" /> </a>
                          <a className="navbar-brand brand-logo-mini" href="../../index.html">
                            <img src="../../../assets/images/logo-mini.svg" alt="logo" /> </a>
                        </div>
                        <div className="navbar-menu-wrapper d-flex align-items-center">
                          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="mdi mdi-menu" />
                          </button>
                          <ul className="navbar-nav navbar-nav-left header-links d-none d-md-flex">
                            <li className="nav-item">
                              <a href="/" className="nav-link">Schedule
                                <span className="badge badge-primary ml-1">New</span>
                              </a>
                            </li>
                            <li className="nav-item active">
                              <a href="/" className="nav-link">
                                <i className="mdi mdi-elevation-rise" />Reports</a>
                            </li>
                            <li className="nav-item">
                              <a href="/" className="nav-link">
                                <i className="mdi mdi-bookmark-plus-outline" />Score</a>
                            </li>
                          </ul>
                          <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item dropdown">
                              <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="/" data-toggle="dropdown" aria-expanded="false">
                                <i className="mdi mdi-file-outline" />
                                <span className="count">7</span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                                <a className="dropdown-item py-3">
                                  <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                                  <span className="badge badge-pill badge-primary float-right">View all</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item preview-item">
                                  <div className="preview-thumbnail">
                                    <img src="../../../assets/images/faces/face10.jpg" alt="figure" className="img-sm profile-pic" /> </div>
                                  <div className="preview-item-content flex-grow py-2">
                                    <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                                  </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                  <div className="preview-thumbnail">
                                    <img src="../../../assets/images/faces/face12.jpg" alt="figure" className="img-sm profile-pic" /> </div>
                                  <div className="preview-item-content flex-grow py-2">
                                    <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                                  </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                  <div className="preview-thumbnail">
                                    <img src="../../../assets/images/faces/face1.jpg" alt="figure" className="img-sm profile-pic" /> </div>
                                  <div className="preview-item-content flex-grow py-2">
                                    <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                                  </div>
                                </a>
                              </div>
                            </li>
                            <li className="nav-item dropdown ml-4">
                              <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="/" data-toggle="dropdown">
                                <i className="mdi mdi-bell-outline" />
                                <span className="count bg-success">4</span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                                <a className="dropdown-item py-3 border-bottom">
                                  <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                                  <span className="badge badge-pill badge-primary float-right">View all</span>
                                </a>
                                <a className="dropdown-item preview-item py-3">
                                  <div className="preview-thumbnail">
                                    <i className="mdi mdi-alert m-auto text-primary" />
                                  </div>
                                  <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                                    <p className="font-weight-light small-text mb-0"> Just now </p>
                                  </div>
                                </a>
                                <a className="dropdown-item preview-item py-3">
                                  <div className="preview-thumbnail">
                                    <i className="mdi mdi-settings m-auto text-primary" />
                                  </div>
                                  <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                                    <p className="font-weight-light small-text mb-0"> Private message </p>
                                  </div>
                                </a>
                                <a className="dropdown-item preview-item py-3">
                                  <div className="preview-thumbnail">
                                    <i className="mdi mdi-airballoon m-auto text-primary" />
                                  </div>
                                  <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                                    <p className="font-weight-light small-text mb-0"> 2 days ago </p>
                                  </div>
                                </a>
                              </div>
                            </li>
                            <li className="nav-item d-none d-lg-block color-setting">
                              <a className="nav-link" href="/">
                                <i className="mdi mdi-tune" />
                              </a>
                            </li>
                            <li className="nav-item dropdown d-none d-xl-inline-block">
                              <a className="nav-link dropdown-toggle" id="UserDropdown" href="/" data-toggle="dropdown" aria-expanded="false">
                                <span className="profile-text">Richard V.Welsh !</span>
                                <img className="img-xs rounded-circle" src="../../../assets/images/faces/face8.jpg" alt="Profile image" /> </a>
                              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                <a className="dropdown-item p-0">
                                  <div className="d-flex border-bottom">
                                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                                      <i className="mdi mdi-bookmark-plus-outline mr-0 text-gray" />
                                    </div>
                                    <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                                      <i className="mdi mdi-account-outline mr-0 text-gray" />
                                    </div>
                                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                                      <i className="mdi mdi-alarm-check mr-0 text-gray" />
                                    </div>
                                  </div>
                                </a>
                                <a className="dropdown-item mt-2"> Manage Accounts </a>
                                <a className="dropdown-item"> Change Password </a>
                                <a className="dropdown-item"> Check Inbox </a>
                                <a className="dropdown-item"> Sign Out </a>
                              </div>
                            </li>
                          </ul>
                          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="icon-menu" />
                          </button>
                        </div>
                      </nav> */}
                      {/* partial */}
                      <div className="container-fluid page-body-wrapper">
                        {/* partial:../../partials/_settings-panel.html */}
                        <div className="theme-setting-wrapper">
                          <div id="theme-settings" className="settings-panel">
                            <i className="settings-close mdi mdi-close" />
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                              <p className="settings-heading font-weight-bold border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Template Skins</p>
                            </div>
                            <div className="sidebar-bg-options selected" id="sidebar-light-theme">
                              <div className="img-ss rounded-circle bg-light border mr-3" />Light</div>
                            <div className="sidebar-bg-options" id="sidebar-dark-theme">
                              <div className="img-ss rounded-circle bg-dark border mr-3" />Dark</div>
                            <p className="settings-heading font-weight-bold mt-2">Header Skins</p>
                            <div className="color-tiles mx-0 px-4">
                              <div className="tiles primary" />
                              <div className="tiles success" />
                              <div className="tiles warning" />
                              <div className="tiles danger" />
                              <div className="tiles pink" />
                              <div className="tiles info" />
                              <div className="tiles dark" />
                              <div className="tiles default" />
                            </div>
                          </div>
                        </div>
                        <div id="right-sidebar" className="settings-panel">
                          <i className="settings-close mdi mdi-close" />
                          <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="settings-heading font-weight-bold border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                          </div>
                          <ul className="chat-list">
                            <li className="list active">
                              <div className="profile">
                                <img src="../../../assets/images/faces/face1.jpg" alt="figure" />
                                <span className="online" />
                              </div>
                              <div className="info">
                                <p>Thomas Douglas</p>
                                <p>Available</p>
                              </div>
                              <small className="text-muted my-auto">19 min</small>
                            </li>
                            <li className="list">
                              <div className="profile">
                                <img src="../../../assets/images/faces/face2.jpg" alt="figure" />
                                <span className="offline" />
                              </div>
                              <div className="info">
                                <div className="wrapper d-flex">
                                  <p>Catherine</p>
                                </div>
                                <p>Away</p>
                              </div>
                              <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                              <small className="text-muted my-auto">23 min</small>
                            </li>
                            <li className="list">
                              <div className="profile">
                                <img src="../../../assets/images/faces/face3.jpg" alt="figure" />
                                <span className="online" />
                              </div>
                              <div className="info">
                                <p>Daniel Russell</p>
                                <p>Available</p>
                              </div>
                              <small className="text-muted my-auto">14 min</small>
                            </li>
                            <li className="list">
                              <div className="profile">
                                <img src="../../../assets/images/faces/face4.jpg" alt="figure" />
                                <span className="offline" />
                              </div>
                              <div className="info">
                                <p>James Richardson</p>
                                <p>Away</p>
                              </div>
                              <small className="text-muted my-auto">2 min</small>
                            </li>
                            <li className="list">
                              <div className="profile">
                                <img src="../../../assets/images/faces/face5.jpg" alt="figure" />
                                <span className="online" />
                              </div>
                              <div className="info">
                                <p>Madeline Kennedy</p>
                                <p>Available</p>
                              </div>
                              <small className="text-muted my-auto">5 min</small>
                            </li>
                            <li className="list">
                              <div className="profile">
                                <img src="../../../assets/images/faces/face6.jpg" alt="figure" />
                                <span className="online" />
                              </div>
                              <div className="info">
                                <p>Sarah Graves</p>
                                <p>Available</p>
                              </div>
                              <small className="text-muted my-auto">47 min</small>
                            </li>
                          </ul>
                        </div>
                        {/* partial */}
                        {/* partial:../../partials/_sidebar.html */}
                        <nav className="sidebar sidebar-offcanvas" id="sidebar">
                          <ul className="nav">
                            <li className="nav-item nav-profile">
                              <div className="nav-link">
                                <div className="user-wrapper">
                                  <div className="profile-image">
                                    <img src="../../../assets/images/faces/face8.jpg" alt="profile figure" /> </div>
                                  <div className="text-wrapper">
                                    <p className="profile-name">Richard V.Welsh</p>
                                    <div>
                                      <small className="designation text-muted">Manager</small>
                                      <span className="status-indicator online" />
                                    </div>
                                  </div>
                                </div>
                                <button className="btn btn-success btn-block">New Project
                                  <i className="mdi mdi-plus" />
                                </button>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#dashboard-dropdown" aria-expanded="false" aria-controls="dashboard-dropdown">
                                <i className="menu-icon mdi mdi-television" />
                                <span className="menu-title">Dashboard</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="dashboard-dropdown">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../index.html">Dashboard 1</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/dashboards/dashboard-2.html">Dashboard 2</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#page-layouts" aria-expanded="false" aria-controls="page-layouts">
                                <i className="menu-icon mdi mdi-notification-clear-all" />
                                <span className="menu-title">Page Layouts</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="page-layouts">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/layout/boxed-layout.html">Boxed</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/layout/rtl-layout.html">RTL</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#apps-dropdown" aria-expanded="false" aria-controls="apps-dropdown">
                                <i className="menu-icon mdi mdi-dna" />
                                <span className="menu-title">Apps</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="apps-dropdown">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/apps/email.html">E-mail</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/apps/calendar.html">Calendar</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/apps/todo.html">Todo List</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/apps/gallery.html">Gallery</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="../../pages/samples/widgets.html">
                                <i className="menu-icon mdi mdi-trackpad" />
                                <span className="menu-title">Widgets</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#sidebar-layouts" aria-expanded="false" aria-controls="sidebar-layouts">
                                <i className="menu-icon mdi mdi-texture" />
                                <span className="menu-title">SideBar Layouts</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="sidebar-layouts">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/layout/compact-menu.html">Compact menu</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/layout/sidebar-collapsed.html">Icon menu</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/layout/sidebar-hidden.html">SideBar Hidden</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/layout/sidebar-hidden-overlay.html">SideBar Overlay</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/layout/sidebar-fixed.html">SideBar Fixed</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                <i className="menu-icon mdi mdi-content-copy" />
                                <span className="menu-title">Basic UI Elements</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="ui-basic">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/accordions.html">Accordions</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/buttons.html">Buttons</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/badges.html">Badges</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/breadcrumbs.html">Breadcrumbs</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/dropdowns.html">Dropdowns</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/modals.html">Modals</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/progress.html">Progress bar</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/pagination.html">Pagination</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/tabs.html">Tabs</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/typography.html">Typography</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/tooltips.html">Tooltips</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="ui-advanced">
                                <i className="menu-icon mdi mdi-lightbulb-outline" />
                                <span className="menu-title">Advanced Elements</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="ui-advanced">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/dragula.html">Dragula</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/clipboard.html">Clipboard</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/context-menu.html">Context menu</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/slider.html">Sliders</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/carousel.html">Carousel</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/colcade.html">Colcade</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/ui-features/loaders.html">Loaders</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                                <i className="menu-icon mdi mdi-backup-restore" />
                                <span className="menu-title">Form elements</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="form-elements">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/forms/basic_elements.html">Basic Elements</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/forms/advanced_elements.html">Advanced Elements</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/forms/validation.html">Validation</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/forms/wizard.html">Wizard</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
                                <i className="menu-icon mdi mdi-code-brackets" />
                                <span className="menu-title">Editors</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="editors">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/forms/text_editor.html">Text editors</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/forms/code_editor.html">Code editors</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                                <i className="menu-icon mdi mdi-chart-line" />
                                <span className="menu-title">Charts</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="charts">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/charts/chartjs.html">ChartJs</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/charts/morris.html">Morris</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/charts/flot-chart.html">Flot</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/charts/google-charts.html">Google charts</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/charts/sparkline.html">Sparkline js</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/charts/c3.html">C3 charts</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/charts/chartist.html">Chartists</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/charts/justGage.html">JustGage</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                                <i className="menu-icon mdi mdi-table" />
                                <span className="menu-title">Tables</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="tables">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/tables/basic-table.html">Basic table</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/tables/data-table.html">Data table</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/tables/js-grid.html">Js-grid</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/tables/sortable-table.html">Sortable table</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="../../pages/ui-features/popups.html">
                                <i className="menu-icon mdi mdi-shield-outline" />
                                <span className="menu-title">Popups</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="../../pages/ui-features/notifications.html">
                                <i className="menu-icon mdi mdi-flag-outline" />
                                <span className="menu-title">Notifications</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                                <i className="menu-icon mdi mdi-sticker" />
                                <span className="menu-title">Icons</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="icons">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/icons/flag-icons.html">Flag icons</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/icons/font-awesome.html">Font Awesome</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/icons/simple-line-icon.html">Simple line icons</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/icons/themify.html">Themify icons</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#maps" aria-expanded="false" aria-controls="maps">
                                <i className="menu-icon mdi mdi-map-marker-circle" />
                                <span className="menu-title">Maps</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="maps">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/maps/mapeal.html">Mapeal</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/maps/vector-map.html">Vector Map</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/maps/google-maps.html">Google Map</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                                <i className="menu-icon mdi mdi-restart" />
                                <span className="menu-title">User Pages</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="auth">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/login.html"> Login </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/login-2.html"> Login 2 </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/register.html"> Register </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/register-2.html"> Register 2 </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/lock-screen.html"> Lockscreen </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                                <i className="menu-icon mdi mdi-restart" />
                                <span className="menu-title">Error pages</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="error">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/error-404.html"> 404 </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/error-500.html"> 500 </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                                <i className="menu-icon mdi mdi-cube-outline" />
                                <span className="menu-title">General Pages</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="general-pages">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/blank-page.html"> Blank Page </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/landing-page.html"> Landing Page </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/profile.html"> Profile </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/faq.html"> FAQ </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/faq-2.html"> FAQ 2 </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/news-grid.html"> News grid </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/timeline.html"> Timeline </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/search-results.html"> Search Results </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/portfolio.html"> Portfolio </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="collapse" href="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
                                <i className="menu-icon mdi mdi-apple-keyboard-command" />
                                <span className="menu-title">E-commerce</span>
                                <i className="menu-arrow" />
                              </a>
                              <div className="collapse" id="e-commerce">
                                <ul className="nav flex-column sub-menu">
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/invoice.html"> Invoice </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/pricing-table.html"> Pricing Table </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="../../pages/samples/orders.html"> Orders </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </nav>
                        {/* partial */}
                        <div className="main-panel">
                          <div className="content-wrapper">
                            <div className="row">
                              <div className="col-lg-12 grid-margin">
                                <div className="card">
                                  <div className="card-body">
                                    <h4 className="card-title">Basic dropdown</h4>
                                    <p className="card-description"> Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code>.dropdown</code> </p>
                                    <div className="template-demo">
                                      <div className="dropdown">
                                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton5">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton6">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <h4 className="card-title">Dropdown outline</h4>
                                    <p className="card-description"> Add class <code>.btn-outline-{'{'}color{'}'}</code> to the button inside <code>.dropdown</code> </p>
                                    <div className="template-demo">
                                      <div className="dropdown">
                                        <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuOutlineButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOutlineButton1">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuOutlineButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOutlineButton2">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuOutlineButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOutlineButton3">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenuOutlineButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOutlineButton4">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuOutlineButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOutlineButton5">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-outline-info dropdown-toggle" type="button" id="dropdownMenuOutlineButton6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOutlineButton6">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 grid-margin stretch-card">
                                <div className="card">
                                  <div className="card-body">
                                    <h4 className="card-title">Split button dropdowns</h4>
                                    <p className="card-description"> Wrap two buttons in <code>.btn-group</code> and add <code>.dropdown-toggle-split</code> to the toggling button </p>
                                    <div className="template-demo">
                                      <div className="btn-group">
                                        <button type="button" className="btn btn-primary">Dropdown</button>
                                        <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton1">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="btn-group">
                                        <button type="button" className="btn btn-danger">Dropdown</button>
                                        <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton2">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="btn-group">
                                        <button type="button" className="btn btn-success">Dropdown</button>
                                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton3">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="btn-group">
                                        <button type="button" className="btn btn-secondary">Dropdown</button>
                                        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton4">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="btn-group">
                                        <button type="button" className="btn btn-info">Dropdown</button>
                                        <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton5">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="btn-group">
                                        <button type="button" className="btn btn-warning">Dropdown</button>
                                        <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton6">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 grid-margin stretch-card">
                                <div className="card">
                                  <div className="card-body">
                                    <h4 className="card-title">Icon dropdowns</h4>
                                    <p className="card-description"> Replace button with icon buttons </p>
                                    <div className="template-demo">
                                      <div className="row">
                                        <div className="col-12">
                                          <div className="dropdown">
                                            <button className="btn btn-warning icon-btn dropdown-toggle" type="button" id="dropdownMenuIconButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="mdi mdi-earth" />
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton1">
                                              <h6 className="dropdown-header">Settings</h6>
                                              <a className="dropdown-item" href="/">Action</a>
                                              <a className="dropdown-item" href="/">Another action</a>
                                              <a className="dropdown-item" href="/">Something else here</a>
                                              <div className="dropdown-divider" />
                                              <a className="dropdown-item" href="/">Separated link</a>
                                            </div>
                                          </div>
                                          <div className="dropdown">
                                            <button className="btn btn-danger dropdown-toggle icon-btn" type="button" id="dropdownMenuIconButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="mdi mdi-trophy-outline" />
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton2">
                                              <h6 className="dropdown-header">Settings</h6>
                                              <a className="dropdown-item" href="/">Action</a>
                                              <a className="dropdown-item" href="/">Another action</a>
                                              <a className="dropdown-item" href="/">Something else here</a>
                                              <div className="dropdown-divider" />
                                              <a className="dropdown-item" href="/">Separated link</a>
                                            </div>
                                          </div>
                                          <div className="dropdown">
                                            <button type="button" className="btn btn-light  icon-btn dropdown-toggle dropdown-toggle-split" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="mdi mdi-email" />
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton3">
                                              <h6 className="dropdown-header">Settings</h6>
                                              <a className="dropdown-item" href="/">Action</a>
                                              <a className="dropdown-item" href="/">Another action</a>
                                              <a className="dropdown-item" href="/">Something else here</a>
                                              <div className="dropdown-divider" />
                                              <a className="dropdown-item" href="/">Separated link</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12">
                                          <div className="dropdown">
                                            <button type="button" className="btn btn-success icon-btn dropdown-toggle" id="dropdownMenuIconButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="mdi mdi-heart" />
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton4">
                                              <h6 className="dropdown-header">Settings</h6>
                                              <a className="dropdown-item" href="/">Action</a>
                                              <a className="dropdown-item" href="/">Another action</a>
                                              <a className="dropdown-item" href="/">Something else here</a>
                                              <div className="dropdown-divider" />
                                              <a className="dropdown-item" href="/">Separated link</a>
                                            </div>
                                          </div>
                                          <div className="dropdown">
                                            <button type="button" className="btn btn-secondary icon-btn dropdown-toggle" id="dropdownMenuIconButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="mdi mdi-logout" />
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton5">
                                              <h6 className="dropdown-header">Settings</h6>
                                              <a className="dropdown-item" href="/">Action</a>
                                              <a className="dropdown-item" href="/">Another action</a>
                                              <a className="dropdown-item" href="/">Something else here</a>
                                              <div className="dropdown-divider" />
                                              <a className="dropdown-item" href="/">Separated link</a>
                                            </div>
                                          </div>
                                          <div className="dropdown">
                                            <button className="btn btn-primary icon-btn dropdown-toggle" type="button" id="dropdownMenuIconButton6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="mdi mdi-security" />
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton6">
                                              <h6 className="dropdown-header">Settings</h6>
                                              <a className="dropdown-item" href="/">Action</a>
                                              <a className="dropdown-item" href="/">Another action</a>
                                              <a className="dropdown-item" href="/">Something else here</a>
                                              <div className="dropdown-divider" />
                                              <a className="dropdown-item" href="/">Separated link</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12">
                                          <div className="dropdown">
                                            <button type="button" className="btn btn-dark icon-btn dropdown-toggle" id="dropdownMenuIconButton7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="mdi mdi-account" />
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton7">
                                              <h6 className="dropdown-header">Settings</h6>
                                              <a className="dropdown-item" href="/">Action</a>
                                              <a className="dropdown-item" href="/">Another action</a>
                                              <a className="dropdown-item" href="/">Something else here</a>
                                              <div className="dropdown-divider" />
                                              <a className="dropdown-item" href="/">Separated link</a>
                                            </div>
                                          </div>
                                          <div className="dropdown">
                                            <button type="button" className="btn btn-info icon-btn dropdown-toggle" id="dropdownMenuIconButton8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="mdi mdi-bell" />
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton8">
                                              <h6 className="dropdown-header">Settings</h6>
                                              <a className="dropdown-item" href="/">Action</a>
                                              <a className="dropdown-item" href="/">Another action</a>
                                              <a className="dropdown-item" href="/">Something else here</a>
                                              <div className="dropdown-divider" />
                                              <a className="dropdown-item" href="/">Separated link</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 grid-margin stretch-card">
                                <div className="card">
                                  <div className="card-body">
                                    <h4 className="card-title">Dropup variation</h4>
                                    <p className="card-description"> Add class <code>.dropup</code> </p>
                                    <div className="template-demo">
                                      <div className="btn-group dropup">
                                        <button type="button" className="btn btn-primary">Dropdown</button>
                                        <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropupMenuSplitButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropupMenuSplitButton1">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="btn-group dropup">
                                        <button type="button" className="btn btn-danger">Dropdown</button>
                                        <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" id="dropupMenuSplitButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropupMenuSplitButton2">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="btn-group dropup">
                                        <button type="button" className="btn btn-success">Dropdown</button>
                                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" id="dropupMenuSplitButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropupMenuSplitButton3">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="btn-group dropup">
                                        <button type="button" className="btn btn-secondary">Dropdown</button>
                                        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropupMenuSplitButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropupMenuSplitButton4">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="btn-group dropup">
                                        <button type="button" className="btn btn-info">Dropdown</button>
                                        <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" id="dropupMenuSplitButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropupMenuSplitButton5">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="btn-group dropup">
                                        <button type="button" className="btn btn-warning">Dropdown</button>
                                        <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" id="dropupMenuSplitButton6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropupMenuSplitButton6">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 grid-margin stretch-card">
                                <div className="card">
                                  <div className="card-body">
                                    <h4 className="card-title">Dropdown sizes</h4>
                                    <p className="card-description"> Add class <code>.btn-{'{'}size{'}'}</code> to dropdown buttons </p>
                                    <div className="template-demo mt-5">
                                      <div className="dropdown">
                                        <button className="btn btn-danger btn-lg dropdown-toggle" type="button" id="dropdownMenuSizeButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton1">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuSizeButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton2">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                      <div className="dropdown">
                                        <button className="btn btn-danger btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="/">Action</a>
                                          <a className="dropdown-item" href="/">Another action</a>
                                          <a className="dropdown-item" href="/">Something else here</a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item" href="/">Separated link</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* content-wrapper ends */}
                          {/* partial:../../partials/_footer.html */}
                          <footer className="footer">
                            <div className="container-fluid clearfix">
                              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018
                                <a href="http://www.bootstrapdash.com/" target="_blank" rel="noopener noreferrer">Bootstrapdash</a>. All rights reserved.</span>
                              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with
                                <i className="mdi mdi-heart text-danger" />
                              </span>
                            </div>
                          </footer>
                          {/* partial */}
                        </div>
                        {/* main-panel ends */}
                      </div>
                      {/* page-body-wrapper ends */}
                    </div>
                  </div>
                 </div>
               </footer>
             </div>

        );

    }

}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Landing);
