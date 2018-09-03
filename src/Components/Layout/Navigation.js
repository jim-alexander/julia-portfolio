import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../Constants/Routes";

import "./index.css";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact to={routes.HOME} activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.CONTACT} activeClassName="selected">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.RESUME} activeClassName="selected">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.PORTFOLIO} activeClassName="selected">
              Portfolio
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
