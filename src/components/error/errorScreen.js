import React from 'react';

const ErrorScreen = () => {
        return (
            <div className="container">
                <div className="auth-box error-box">
                    <div className="row no-gutters align-items-center justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="text-center">
                                <img src="assets/images/error/maintenance.svg" className="img-fluid error-image" alt="404" />
                                <h4 className="error-subtitle mb-4">Oops! Something went wrong</h4>
                                <p className="mb-4">We are fixing it. </p>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default ErrorScreen;