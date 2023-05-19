import React from "react";
import { NavLink } from "react-router-dom";

import Compress from "../../../../Assets/image/Compress.svg";
import Repair from "../../../../Assets/image/Repair.svg";

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

          <li className="divider" style={{
            border: "1px solid #f6f6f8",
            margin: "7px 20px 7px 5px"
          }}></li>

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

          <li className="divider" style={{
            border: "1px solid #f6f6f8",
            margin: "7px 20px 7px 5px"
          }}></li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/OCR_PDF">
              <img src={Compress} alt="OCR PDF" />
              OCR PDF
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

export default OptimizeList;
