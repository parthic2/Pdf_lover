import React from "react";
import { NavLink } from "react-router-dom";
import Unlock from "../../../../Assets/image/Unlock.svg";
import Protect from "../../../../Assets/image/Protect.svg";
import Sign from "../../../../Assets/image/Sign.svg";

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

          <li className="divider" style={{
            border: "1px solid #f6f6f8",
            margin: "7px 20px 7px 5px"
          }}></li>

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

          <li className="divider" style={{
            border: "1px solid #f6f6f8",
            margin: "7px 20px 7px 5px"
          }}></li>

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

          <li className="divider" style={{
            border: "1px solid #f6f6f8",
            margin: "7px 20px 7px 5px"
          }}></li>

        </ul>
      </li>
    </>
  );
};

export default SecurityList;
