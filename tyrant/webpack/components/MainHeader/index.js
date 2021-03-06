/**
 * Created by snow.zhang on 2017/6/15.
 */

import React from 'react';
// import './index.css';

var MainHeader = React.createClass({

    render() {
        return <header className="main-header">
				    <a href="index.html" className="logo">
				      <span className="logo-mini"><b>T</b></span>
				      <span className="logo-lg"><b>Tyrant</b> </span>
				    </a>

				    <nav className="navbar navbar-static-top" role="navigation">
				      <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
				        <span className="sr-only">Toggle navigation</span>
				      </a>
				      <div className="navbar-custom-menu" style={{display:'none'}}>
				        <ul className="nav navbar-nav">
				        
				          <li className="dropdown tasks-menu">
				            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
				              <i className="fa fa-flag-o"></i>
				              <span className="label label-danger">9</span>
				            </a>
				            <ul className="dropdown-menu">
				              <li className="header">You have 9 tasks</li>
				              <li>
				                <ul className="menu">
				                  <li>
				                    <a href="#">
				                      <h3>
				                        Design some buttons
				                        <small className="pull-right">20%</small>
				                      </h3>
				                      <div className="progress xs">
				                        <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
				                          <span className="sr-only">20% Complete</span>
				                        </div>
				                      </div>
				                    </a>
				                  </li>
				                </ul>
				              </li>
				              <li className="footer">
				                <a href="#">View all tasks</a>
				              </li>
				            </ul>
				          </li>
				          <li className="dropdown user user-menu">
				            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
				              <img src="../webpack/common/img/user2-160x160.jpg" className="user-image" alt="User Image">
				              </img>
				              <span className="hidden-xs">Alexander Pierce</span>
				            </a>
				            <ul className="dropdown-menu">
				              <li className="user-header">
				                <img src="../webpack/common/img/user2-160x160.jpg" className="img-circle" alt="User Image">
				                </img>
				                <p>
				                  Alexander Pierce - Web Developer
				                  <small>Member since Nov. 2012</small>
				                </p>
				              </li>
				              <li className="user-body">
				                <div className="row">
				                  <div className="col-xs-4 text-center">
				                    <a href="#">Followers</a>
				                  </div>
				                  <div className="col-xs-4 text-center">
				                    <a href="#">Sales</a>
				                  </div>
				                  <div className="col-xs-4 text-center">
				                    <a href="#">Friends</a>
				                  </div>
				                </div>
				              </li>
				              <li className="user-footer">
				                <div className="pull-left">
				                  <a href="#" className="btn btn-default btn-flat">Profile</a>
				                </div>
				                <div className="pull-right">
				                  <a href="#" className="btn btn-default btn-flat">Sign out</a>
				                </div>
				              </li>
				            </ul>
				          </li>
				          <li>
				            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
				          </li>
				        </ul>
				      </div>
				    </nav>
				  </header>;
    }

});

export default MainHeader;