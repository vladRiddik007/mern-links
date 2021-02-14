import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NavBar = () => {
  const history = useHistory();
  const auth = React.useContext(AuthContext);
  const logoutHadler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <span className="brand-logo">Logo</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/links">Links</NavLink>
          </li>
          <li>
            <a href="#1" onClick={logoutHadler}>
              Log out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
