import React from "react";
import { withRouter } from "react-router-dom";
import BreadCrumbs from '../../components/Breadcrumbs';

const AdminAccountInfo = ({afterSubmit, formLabel}) => {

  return (
    <>
    <BreadCrumbs title="Admin User Account Privileges" />
    <div className="card m-b-30">
                            <div className="card-header">                                
                                <div className="row align-items-center">
                                    <div className="col-5">
                                        <h5 className="card-title mb-0">David Morrison</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body py-0">
                                <div className="databox">
                                            <div className="databrow">
                                                <div className="datacol"><strong>Customer</strong></div>
                                                <div className="datacol"></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                Select All
                                              </label></div>
                                                <div><strong>Action</strong></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                View List of Customer
                                              </label></div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                Update Custmore Detail
                                              </label>
                                                </div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                View onboarding status
                                              </label>
                                                </div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                Delete Customer record
                                              </label>
                                                </div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                Search Customer
                                              </label>
                                                </div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                    </div>

                            </div>
    </div>
    <div className="card m-b-30">
                            <div className="card-body py-0">
                                <div className="databox">
                                            <div className="databrow">
                                                <div className="datacol"><strong>Promo Category</strong></div>
                                                <div className="datacol"></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                Select All
                                              </label></div>
                                                <div><strong>Action</strong></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                View List of Promo Category
                                              </label></div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                Creat Promo Category
                                              </label>
                                                </div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                Update Promo Category
                                              </label>
                                                </div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                            
                                    </div>

                            </div>
    </div>
    <div className="card m-b-30">
                            <div className="card-body py-0">
                                <div className="databox">
                                            <div className="databrow">
                                                <div className="datacol"><strong>Promo Code</strong></div>
                                                <div className="datacol"></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                Select All
                                              </label></div>
                                                <div><strong>Action</strong></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                View List of Promo Code
                                              </label></div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                Update Promo Code
                                              </label>
                                                </div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                            <div className="databrow">
                                                <div className="datacol">
                                                <label>
                                                <input type="checkbox" value=""  className="mr-2" />
                                                Delete Promo Code
                                              </label>
                                                </div>
                                                <div><span className="badge badge-success">Yes</span></div>
                                            </div>
                                            
                                    </div>

                            </div>
    </div>
    </>
  );
};

export default withRouter(AdminAccountInfo);
