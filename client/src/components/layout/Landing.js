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
                         <h1 className="mr-2 text-white"> Make vacation planning exceptionally fast and simple. </h1>
                         <h3 className="font-weight-light text-white"> Plan and book your holidays in few clicks </h3>
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
                 <div className="test">
                  <div className="main-panel">
                    <div className="content-wrapper">
                      <div className="row">
                        <div className="col-lg-6 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body">
                              <h4 className="card-title">Basic accordions</h4>
                              <p className="card-description">Use class <code>.basic-accordion</code> for basic accordion</p>
                              <div className="accordion basic-accordion" id="accordion" role="tablist">
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingOne">
                                    <h6 className="mb-0">
                                      <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i className="card-icon mdi mdi-checkbox-marked-circle-outline" />How can I pay for an order I placed? </a>
                                    </h6>
                                  </div>
                                  <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <img className="img-fluid rounded" src="https://placehold.it/200x150" alt="" /> </div>
                                        <div className="col-md-9">
                                          <p>You can pay for the product you have purchased using credit cards, debit cards, or via online banking. </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingTwo">
                                    <h6 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <i className="card-icon mdi mdi-account-multiple-outline" />I can’t sign in to my account </a>
                                    </h6>
                                  </div>
                                  <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                      <i className="mdi mdi-checkbox-marked-circle-outline mr-3" />If while signing in to your account you see an error message, you can do the following
                                      <ol className="pl-3 mt-4">
                                        <li>Check your network connection and try again</li>
                                        <li>Make sure your account credentials are correct while signing in</li>
                                        <li>Check whether your account is accessible in your region</li>
                                      </ol>
                                      <br />
                                      <p className="text-success">
                                        <i className="mdi mdi-alert-octagon mr-2" />If the problem persists, you can contact our support. </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingThree">
                                    <h6 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <i className="card-icon mdi mdi-message-text-outline" />Can I add money to the wallet? </a>
                                    </h6>
                                  </div>
                                  <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body"> You can add money to the wallet for any future transaction from your bank account using net-banking, or credit/debit card transaction. The money in the wallet can be used for an easier and faster transaction. </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body">
                              <h4 className="card-title">Multi colored outline</h4>
                              <p className="card-description">Use
                                class <code>.accordion-multiple-outline</code> for multiple outlined styling</p>
                              <div className="accordion accordion-multiple-outline" id="accordion-2" role="tablist">
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingOne-2">
                                    <h6 className="mb-0">
                                      <a data-toggle="collapse" href="#collapseOne-2" aria-expanded="true" aria-controls="collapseOne-2">
                                        <i className="card-icon mdi mdi-checkbox-marked-circle-outline" />How can I pay for an order I placed? </a>
                                    </h6>
                                  </div>
                                  <div id="collapseOne-2" className="collapse show" role="tabpanel" aria-labelledby="headingOne-2" data-parent="#accordion-2">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <img className="img-fluid rounded" src="https://placehold.it/200x150" alt="" /> </div>
                                        <div className="col-md-9">
                                          <p>You can pay for the product you have purchased using credit cards, debit cards, or via online banking. </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingTwo-2">
                                    <h6 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseTwo-2" aria-expanded="false" aria-controls="collapseTwo-2">
                                        <i className="card-icon mdi mdi-account-multiple-outline" />I can’t sign in to my account </a>
                                    </h6>
                                  </div>
                                  <div id="collapseTwo-2" className="collapse" role="tabpanel" aria-labelledby="headingTwo-2" data-parent="#accordion-2">
                                    <div className="card-body">
                                      <p> If while signing in to your account you see an error message, you can do the following </p>
                                      <ol className="pl-3">
                                        <li>Check your network connection and try again</li>
                                        <li>Make sure your account credentials are correct while signing in</li>
                                        <li>Check whether your account is accessible in your region</li>
                                      </ol>
                                      <br />
                                      <i className="mdi mdi-alert-octagon mr-2" />If the problem persists, you can contact our support. </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingThree-2">
                                    <h6 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseThree-2" aria-expanded="false" aria-controls="collapseThree-2">
                                        <i className="card-icon mdi mdi-message-text-outline" />How can I deactivate my account? </a>
                                    </h6>
                                  </div>
                                  <div id="collapseThree-2" className="collapse" role="tabpanel" aria-labelledby="headingThree-2" data-parent="#accordion-2">
                                    <div className="card-body"> If you wish to deactivate your account, you can go to the Settings page of your account. Click on Account Settings and then click on Deactivate. </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body">
                              <h4 className="card-title">Multi colored filled</h4>
                              <p className="card-description">Use class <code>.accordion-multiple-filled</code> for multiple filled styling</p>
                              <div className="accordion accordion-multiple-filled" id="accordion-3" role="tablist">
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingOne-3">
                                    <h5 className="mb-0">
                                      <a data-toggle="collapse" href="#collapseOne-3" aria-expanded="false" aria-controls="collapseOne-3"> Can I transfer the money from the wallet to my bank account? </a>
                                    </h5>
                                  </div>
                                  <div id="collapseOne-3" className="collapse" role="tabpanel" aria-labelledby="headingOne-3" data-parent="#accordion-3">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <img className="img-fluid rounded" src="https://placehold.it/200x150" alt="" /> </div>
                                        <div className="col-md-9">
                                          <p>You can pay for the product you have purchased using credit cards, debit cards, or via online banking. </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingTwo-3">
                                    <h5 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseTwo-3" aria-expanded="false" aria-controls="collapseTwo-3"> I forgot my account password. What should I do? </a>
                                    </h5>
                                  </div>
                                  <div id="collapseTwo-3" className="collapse" role="tabpanel" aria-labelledby="headingTwo-3" data-parent="#accordion-3">
                                    <div className="card-body">
                                      <ol className="pl-3">
                                        <li>Click on the ‘forgot password’ link.</li>
                                        <li>Enter your email address registered with us</li>
                                        <li>Click on the link sent you in the email</li>
                                        <li>Reset your password</li>
                                      </ol>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingThree-3">
                                    <h5 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseThree-3" aria-expanded="false" aria-controls="collapseThree-3"> What should I do if I need any assistance using my account </a>
                                    </h5>
                                  </div>
                                  <div id="collapseThree-3" className="collapse" role="tabpanel" aria-labelledby="headingThree-3" data-parent="#accordion-3">
                                    <div className="card-body"> If you need any assistance while using your account, you can contact our customer support via email at support@abc.com. Or you can live chat with our support team. Our support team is available 24*7 </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body">
                              <h4 className="card-title">Inverse Accordion</h4>
                              <p className="card-description">Use class <code>.accordion-inverse-*</code> for <code>.card</code> for inverse styling</p>
                              <div className="accordion" id="accordion-4" role="tablist">
                                <div className="card accordion-inverse-primary">
                                  <div className="card-header" role="tab" id="headingOne-4">
                                    <h5 className="mb-0">
                                      <a data-toggle="collapse" href="#collapseOne-4" aria-expanded="false" aria-controls="collapseOne-4"> Can I transfer the money from the wallet to my bank account? </a>
                                    </h5>
                                  </div>
                                  <div id="collapseOne-4" className="collapse" role="tabpanel" aria-labelledby="headingOne-4" data-parent="#accordion-4">
                                    <div className="card-body"> You can at any time reclaim your money to your bank account that you have registered with us. If there are no registered account, then you can add an account in the ‘Register Bank Account’ page. </div>
                                  </div>
                                </div>
                                <div className="card accordion-inverse-primary">
                                  <div className="card-header" role="tab" id="headingTwo-4">
                                    <h5 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseTwo-4" aria-expanded="false" aria-controls="collapseTwo-4"> I forgot my account password. What should I do? </a>
                                    </h5>
                                  </div>
                                  <div id="collapseTwo-4" className="collapse" role="tabpanel" aria-labelledby="headingTwo-4" data-parent="#accordion-4">
                                    <div className="card-body">
                                      <ol className="pl-3">
                                        <li>Click on the ‘forgot password’ link.</li>
                                        <li>Enter your email address registered with us</li>
                                        <li>Click on the link sent you in the email</li>
                                        <li>Reset your password</li>
                                      </ol>
                                    </div>
                                  </div>
                                </div>
                                <div className="card accordion-inverse-primary">
                                  <div className="card-header" role="tab" id="headingThree-4">
                                    <h5 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseThree-4" aria-expanded="false" aria-controls="collapseThree-4"> What should I do if I need any assistance using my account </a>
                                    </h5>
                                  </div>
                                  <div id="collapseThree-4" className="collapse" role="tabpanel" aria-labelledby="headingThree-4" data-parent="#accordion-4">
                                    <div className="card-body"> If you need any assistance while using your account, you can contact our customer support via email at support@abc.com. Or you can live chat with our support team. Our support team is available 24*7 </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body">
                              <h4 className="card-title">Solid Background</h4>
                              <p className="card-description">Use class <code>.accordion-solid-bg</code> for inverse styling</p>
                              <div className="accordion accordion-solid-bg" id="accordion-5" role="tablist">
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingOne-5">
                                    <h5 className="mb-0">
                                      <a data-toggle="collapse" href="#collapseOne-5" aria-expanded="false" aria-controls="collapseOne-5"> Can I transfer the money from the wallet to my bank account? </a>
                                    </h5>
                                  </div>
                                  <div id="collapseOne-5" className="collapse" role="tabpanel" aria-labelledby="headingOne-5" data-parent="#accordion-5">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <img className="img-fluid rounded" src="https://placehold.it/200x150" alt="" /> </div>
                                        <div className="col-md-9">
                                          <p>You can pay for the product you have purchased using credit cards, debit cards, or via online banking. </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingTwo-5">
                                    <h5 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseTwo-5" aria-expanded="false" aria-controls="collapseTwo-5"> I forgot my account password. What should I do? </a>
                                    </h5>
                                  </div>
                                  <div id="collapseTwo-5" className="collapse" role="tabpanel" aria-labelledby="headingTwo-5" data-parent="#accordion-5">
                                    <div className="card-body">
                                      <ol className="pl-3">
                                        <li>Click on the ‘forgot password’ link.</li>
                                        <li>Enter your email address registered with us</li>
                                        <li>Click on the link sent you in the email</li>
                                        <li>Reset your password</li>
                                      </ol>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingThree-5">
                                    <h5 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseThree-5" aria-expanded="false" aria-controls="collapseThree-5"> What should I do if I need any assistance using my account </a>
                                    </h5>
                                  </div>
                                  <div id="collapseThree-5" className="collapse" role="tabpanel" aria-labelledby="headingThree-5" data-parent="#accordion-5">
                                    <div className="card-body"> If you need any assistance while using your account, you can contact our customer support via email at support@abc.com. Or you can live chat with our support team. Our support team is available 24*7 </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body">
                              <h4 className="card-title">Body Filled</h4>
                              <p className="card-description">Use class <code>.accordion-body-filled</code> for <code>.card-header</code> for body filled styling</p>
                              <div className="accordion accordion-body-filled" id="accordion-6" role="tablist">
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingOne-6">
                                    <h5 className="mb-0">
                                      <a data-toggle="collapse" href="#collapseOne-6" aria-expanded="false" aria-controls="collapseOne-6"> Can I transfer the money from the wallet to my bank account? </a>
                                    </h5>
                                  </div>
                                  <div id="collapseOne-6" className="collapse" role="tabpanel" aria-labelledby="headingOne-6" data-parent="#accordion-6">
                                    <div className="card-body"> We’ll ensure you always get the best guidance. We serve a clients us every level of their organization </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingTwo-6">
                                    <h5 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseTwo-6" aria-expanded="false" aria-controls="collapseTwo-6"> I forgot my account password. What should I do? </a>
                                    </h5>
                                  </div>
                                  <div id="collapseTwo-6" className="collapse" role="tabpanel" aria-labelledby="headingTwo-6" data-parent="#accordion-6">
                                    <div className="card-body">
                                      <ol className="pl-3">
                                        <li>Click on the ‘forgot password’ link.</li>
                                        <li>Enter your email address registered with us</li>
                                        <li>Click on the link sent you in the email</li>
                                        <li>Reset your password</li>
                                      </ol>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingThree-6">
                                    <h5 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseThree-6" aria-expanded="false" aria-controls="collapseThree-6"> What should I do if I need any assistance using my account </a>
                                    </h5>
                                  </div>
                                  <div id="collapseThree-6" className="collapse" role="tabpanel" aria-labelledby="headingThree-6" data-parent="#accordion-6">
                                    <div className="card-body"> If you need any assistance while using your account, you can contact our customer support via email at support@abc.com. Or you can live chat with our support team. Our support team is available 24*7 </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body">
                              <h4 className="card-title">Minimal Styled</h4>
                              <p className="card-description">Use class <code>.accordion-minimal</code> for more cleaner look</p>
                              <div className="accordion accordion-minimal" id="accordion-7" role="tablist">
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingOne-7">
                                    <h5 className="mb-0">
                                      <a data-toggle="collapse" href="#collapseOne-7" aria-expanded="false" aria-controls="collapseOne-7"> Can I transfer the money from the wallet to my bank account? </a>
                                    </h5>
                                  </div>
                                  <div id="collapseOne-7" className="collapse" role="tabpanel" aria-labelledby="headingOne-7" data-parent="#accordion-7">
                                    <div className="card-body"> We’ll ensure you always get the best guidance. We serve a clients us every level of their organization </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingTwo-7">
                                    <h5 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseTwo-7" aria-expanded="false" aria-controls="collapseTwo-7"> I forgot my account password. What should I do? </a>
                                    </h5>
                                  </div>
                                  <div id="collapseTwo-7" className="collapse" role="tabpanel" aria-labelledby="headingTwo-7" data-parent="#accordion-7">
                                    <div className="card-body">
                                      <ol className="pl-3">
                                        <li>Click on the ‘forgot password’ link.</li>
                                        <li>Enter your email address registered with us</li>
                                        <li>Click on the link sent you in the email</li>
                                        <li>Reset your password</li>
                                      </ol>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="card-header" role="tab" id="headingThree-7">
                                    <h5 className="mb-0">
                                      <a className="collapsed" data-toggle="collapse" href="#collapseThree-7" aria-expanded="false" aria-controls="collapseThree-7"> What should I do if I need any assistance using my account </a>
                                    </h5>
                                  </div>
                                  <div id="collapseThree-7" className="collapse" role="tabpanel" aria-labelledby="headingThree-7" data-parent="#accordion-7">
                                    <div className="card-body"> If you need any assistance while using your account, you can contact our customer support via email at support@abc.com. Or you can live chat with our support team. Our support team is available 24*7 </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
