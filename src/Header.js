import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="outer">
        <div className="first">
          <NavLink to="/">Home</NavLink>
        </div>

        <div className="second">
          <NavLink to="/about">About</NavLink>
        </div>

        <div className="third">
          <NavLink to="/contact">Contact us</NavLink>
        </div>

        <div className="fourth">
            <NavLink to="/anotherPage">
                AnotherPage
            </NavLink>

        </div>

        {/* <div className="fourth"></div> */}
      </div>
    </>
  );
}
