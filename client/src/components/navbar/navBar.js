import React, { Fragment, useState, useEffect } from "react";

const Navigation = (props) => {
  console.log("navbaarrr", props.username)
  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            Facebike
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse">
          </div>
          {props.auth &&
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Sign Out
      </a>
              </li>
            </ul>
          }
        </nav>
      </div>
    </Fragment>
  );
};

export default Navigation;