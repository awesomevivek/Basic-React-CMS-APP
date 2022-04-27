import React from "react";

const Topbar = () => {
        return (
                <div className="topbar">
                    <div className="row align-items-center">
                        <div className="col-md-12 align-self-center">
                            <div className="togglebar">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <div className="menubar">
                                            <a className="menu-hamburger" href="#">
                                                <img src="assets/images/svg-icon/collapse.svg" className="img-fluid menu-hamburger-collapse" alt="collapse" />
                                                <img src="assets/images/svg-icon/close.svg" className="img-fluid menu-hamburger-close" alt="close" />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="searchbar">
                                            <form>
                                                <div className="input-group">
                                                    <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn" type="submit" id="button-addon2"><img src="assets/images/svg-icon/search.svg" className="img-fluid" alt="search" /></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="infobar">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <div className="settingbar">
                                            <a href="#" id="infobar-settings-open" className="infobar-icon">
                                                <img src="assets/images/svg-icon/settings.svg" className="img-fluid" alt="settings" />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="notifybar">
                                            <div className="dropdown">
                                                <a className="dropdown-toggle infobar-icon" href="#" role="button" id="notoficationlink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/svg-icon/notifications.svg" className="img-fluid" alt="notifications" />
                                                    <span className="live-icon"></span></a>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="notoficationlink">
                                                    <div className="notification-dropdown-title">
                                                        <h4>Notifications</h4>
                                                    </div>
                                                    <ul className="list-unstyled">
                                                        <li className="media dropdown-item">
                                                            <span className="action-icon badge badge-primary-inverse"><i className="feather icon-dollar-sign"></i></span>
                                                            <div className="media-body">
                                                                <h5 className="action-title">Promo received</h5>
                                                                <p><span className="timing">Today, 10:45 AM</span></p>
                                                            </div>
                                                        </li>
                                                        <li className="media dropdown-item">
                                                            <span className="action-icon badge badge-success-inverse"><i className="feather icon-file"></i></span>
                                                            <div className="media-body">
                                                                <h5 className="action-title">Project X prototype approved</h5>
                                                                <p><span className="timing">Yesterday, 01:40 PM</span></p>
                                                            </div>
                                                        </li>
                                                        <li className="media dropdown-item">
                                                            <span className="action-icon badge badge-danger-inverse"><i className="feather icon-eye"></i></span>
                                                            <div className="media-body">
                                                                <h5 className="action-title">John requested to view wireframe</h5>
                                                                <p><span className="timing">3 Sep 2019, 05:22 PM</span></p>
                                                            </div>
                                                        </li>
                                                        <li className="media dropdown-item">
                                                            <span className="action-icon badge badge-warning-inverse"><i className="feather icon-package"></i></span>
                                                            <div className="media-body">
                                                                <h5 className="action-title">Sports shoes are out of stock</h5>
                                                                <p><span className="timing">15 Sep 2019, 02:55 PM</span></p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="profilebar">
                                            <div className="dropdown">
                                                <a className="dropdown-toggle" href="#" role="button" id="profilelink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/users/profile.svg" className="img-fluid" alt="profile" /><span className="feather icon-chevron-down live-icon"></span></a>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="profilelink">
                                                    <div className="dropdown-item">
                                                        <div className="profilename">
                                                            <h5>John Doe</h5>
                                                        </div>
                                                    </div>
                                                    <div className="userbox">
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="media dropdown-item">
                                                                <a href="#" className="profile-icon"><img src="assets/images/svg-icon/user.svg" className="img-fluid" alt="user" />My Profile</a>
                                                            </li>
                                                            <li className="media dropdown-item">
                                                                <a href="#" className="profile-icon"><img src="assets/images/svg-icon/logout.svg" className="img-fluid" alt="logout" />Logout</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

export default Topbar;