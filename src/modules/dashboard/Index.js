import React from "react";
import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert'
import Cookies from "js-cookie";

const Dashboard = () => {    
    const [isLoggedIn, setIsLoggedIn] = React.useState(Cookies.get('login_success'));

    const closeLoggedInMessage = () => {
        setIsLoggedIn(false);
        Cookies.remove('login_success');
    }
    return (
        
    <div className="contwraper">
        {
            !!isLoggedIn && 
            <Stack sx={{ width: '100%' }} spacing={2} style={{marginBottom: 10}}>
                <Alert severity="success" onClose={closeLoggedInMessage}>Login Successfull</Alert>
            </Stack>
        }
    
    <div className="breadcrumbbar">
        <div className="row align-items-center">
            <div className="col-md-8 col-lg-8">
                <h4 className="page-title">Dashboard</h4>
                <div className="breadcrumb-list">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item"><NavLink to="#">Dashboard</NavLink></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div className="contentbar">
        <div className="row">
            <div className="col-lg-3">
                <div className="card m-b-30 box-shadow orangelightbg">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <span className="action-icon badge badge-warning-inverse mr-0"><i className="feather icon-user-check"></i></span>
                            </div>
                            <div className="col-7 text-right">
                                <h5 className="card-title font-14">Total Admin</h5>
                                <h4 className="mb-0">25</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row align-items-center">
                            <div className="col-8">
                                <span className="font-13">Updated 1 Day ago</span>
                            </div>
                            <div className="col-4 text-right">
                                <span className="badge badge-success"><i className="feather icon-trending-up mr-1"></i>25%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card m-b-30 box-shadow">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <span className="action-icon badge badge-success-inverse mr-0"><i className="feather icon-users"></i></span>
                            </div>
                            <div className="col-7 text-right">
                                <h5 className="card-title font-14">Total Customer</h5>
                                <h4 className="mb-0">263</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row align-items-center">
                            <div className="col-8">
                                <span className="font-13">Updated 1 Day ago</span>
                            </div>
                            <div className="col-4 text-right">
                                <span className="badge badge-success"><i className="feather icon-trending-down mr-1"></i>23%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card m-b-30 box-shadow greenlightbg">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <span className="action-icon badge badge-secondary-inverse mr-0"><i className="feather icon-tag"></i></span>
                            </div>
                            <div className="col-7 text-right">
                                <h5 className="card-title font-14">Total Promo</h5>
                                <h4 className="mb-0">45</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row align-items-center">
                            <div className="col-8">
                                <span className="font-13">Updated 3 Day ago</span>
                            </div>
                            <div className="col-4 text-right">
                                <span className="badge badge-warning"><i className="feather icon-trending-up mr-1"></i>15%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card m-b-30 box-shadow">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <span className="action-icon badge badge-info-inverse mr-0"><i className="feather icon-archive"></i></span>
                            </div>
                            <div className="col-7 text-right">
                                <h5 className="card-title font-14">Used Promo</h5>
                                <h4 className="mb-0">93</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row align-items-center">
                            <div className="col-8">
                                <span className="font-13">Updated 5 Day ago</span>
                            </div>
                            <div className="col-4 text-right">
                                <span className="badge badge-danger"><i className="feather icon-trending-down mr-1"></i>10%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-xl-6">
                <div className="card m-b-30">
                    <div className="card-header border-bottom">
                        <div className="row align-items-center">
                            <div className="col-6 col-lg-9">
                                <h5 className="card-title mb-0">Recent Added Customer</h5>
                            </div>
                            <div className="col-6 col-lg-3">
                            <button className="btn btn-sm btn-primary-rgba font-12">View All <i className="feather icon-chevrons-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered mb-0 tblsm">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>John Doe</td>
                                        <td>email@domain.com</td>
                                        <td>9999999999</td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>

                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jimmy Simpson</td>
                                        <td>email@yourdomain.com</td>
                                        <td>99999954876</td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Lorea Johnson</td>
                                        <td>contact@domain.com</td>
                                        <td>9999900000</td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Merry Aniston</td>
                                        <td>email@domain.com</td>
                                        <td>1111999999</td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Jessica Perry</td>
                                        <td>myemail@domain.com</td>
                                        <td>7890999999</td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Maria Salkova</td>
                                        <td>youremail@domain.com</td>
                                        <td>9876543210</td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-xl-6">
                <div className="card m-b-30">
                    <div className="card-header border-bottom">
                        <div className="row align-items-center">
                            <div className="col-6 col-lg-9">
                                <h5 className="card-title mb-0">Recent Prome Code</h5>
                            </div>
                            <div className="col-6 col-lg-3">
                            <button className="btn btn-sm btn-primary-rgba font-12">View All <i className="feather icon-chevrons-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-borderless mb-0">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Code</th>
                                        <th>For User</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>999999</td>
                                        <td>John Doe</td>
                                        <td><span className="badge badge-success-inverse py-2 px-3 font-12">Used</span></td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>

                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>5456789</td>
                                        <td>Jimmy Simpson</td>
                                        <td><span className="badge badge-warning-inverse py-2 px-3 font-12">Pending</span></td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>59ijg455</td>
                                        <td>Lorea Johnson</td>
                                        <td><span className="badge badge-success-inverse py-2 px-3 font-12">Used</span></td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>DFG55678</td>
                                        <td>Merry Aniston</td>
                                        <td><span className="badge badge-warning-inverse py-2 px-3 font-12">Pending</span></td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>455gfhjk</td>
                                        <td>Jessica Perry</td>
                                        <td><span className="badge badge-success-inverse py-2 px-3 font-12">Used</span></td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>589KLHF</td>
                                        <td>Maria Salkova</td>
                                        <td><span className="badge badge-warning-inverse py-2 px-3 font-12">Pending</span></td>
                                        <td><button type="button" title='View' className="btn btn-round btn-warning btn-sm"><i className="feather icon-eye"></i></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        );
    }

export default Dashboard;