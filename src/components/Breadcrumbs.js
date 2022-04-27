import * as React from 'react';
import { NavLink } from 'react-router-dom';

const BreadCrumbs = ({title, children }) => {

    return (
        <div className="breadcrumbbar">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-8">
            <h4 className="page-title">{title}</h4>
            <div className="breadcrumb-list">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                  <NavLink to="#">{title}</NavLink>
                </li>
              </ol>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-right">
              {children}
          </div>
        </div>
      </div>
    )
}

export default BreadCrumbs;
