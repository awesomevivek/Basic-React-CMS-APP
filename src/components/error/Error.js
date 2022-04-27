import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
        return (
            <div className="container">
                <div className="auth-box error-box">
                    <div className="row no-gutters align-items-center justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="text-center">
                                <img src="assets/images/error/404.svg" className="img-fluid error-image" alt="404" />
                                <h4 className="error-subtitle mb-4">Oops! Page not Found</h4>
                                <p className="mb-4">We did not find the page you are looking for. Please return to previous page or visit home page. </p>
                                <NavLink to="/home" className="btn btn-primary font-16"><i className="feather icon-home mr-2"></i> Go back to Dashboard</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Error;