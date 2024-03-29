import React from "react";
import { NavLink } from "react-router-dom";

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
              <img src="/image/Unlock.svg" alt="Unlock PDF" />
              Unlock PDF
            </NavLink>
          </li>

          <li className="divider"></li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Protect_PDF">
              <img src="/image/Protect.svg" alt="Protect PDF" />
              Protect PDF
            </NavLink>
          </li>

          <li className="divider"></li>

        </ul>
      </li>
    </>
  );
};

export default SecurityList;
