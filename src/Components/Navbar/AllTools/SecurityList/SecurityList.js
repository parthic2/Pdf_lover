import React from "react";
import { NavLink } from "react-router-dom";
import Unlock from "../../../../Assets/image/Unlock.png";
import Protect from "../../../../Assets/image/Protect.png";
import Sign from "../../../../Assets/image/Sign.png";

const SecurityList = () => {
  return (
    <>
      <li>
        <ul>
          <li>
            <div>PDF security</div>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Unlock_PDF">
              <img src={Unlock} alt="Unlock PDF" />
              Unlock PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Protect_PDF">
              <img src={Protect} alt="Protect PDF" />
              Protect PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Sign_PDF">
              <img src={Sign} alt="Sign PDF" />
              Sign PDF
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
};

export default SecurityList;
