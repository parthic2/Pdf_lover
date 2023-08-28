import React from "react";
import { NavLink } from "react-router-dom";

const OptimizeList = () => {
  return (
    <>
      <li>
        <ul>
          <li>
            <div>Optimize PDF</div>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Compress_PDF">
              <img src="/image/Compress.svg" alt="Compress PDF" loading="lazy" />
              Compress PDF
            </NavLink>
          </li>

          <li className="divider"></li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Repair_PDF">
              <img src="/image/Repair.svg" alt="Repair PDF" loading="lazy" />
              Repair PDF
            </NavLink>
          </li>

          <li className="divider"></li>

        </ul>
      </li>
    </>
  );
};

export default OptimizeList;
