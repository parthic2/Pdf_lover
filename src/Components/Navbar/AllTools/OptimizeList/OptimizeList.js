import React from "react";
import { NavLink } from "react-router-dom";

import Compress from "../../../../Assets/image/Compress.png";
import Repair from "../../../../Assets/image/Repair.png";

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
              <img src={Compress} alt="Compress PDF" />
              Compress PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Repair_PDF">
              <img src={Repair} alt="Repair PDF" />
              Repair PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/OCR_PDF">
              <img src="" alt="OCR PDF" />
              OCR PDF
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
};

export default OptimizeList;
