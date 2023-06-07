import React from "react";
import { NavLink } from "react-router-dom";

const AllConvertList = () => {
  return (
    <>
      <li>
        <ul>
          <li>
            <div>Convert to PDF</div>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/jpg_to_pdf">
              <img src="/image/JtoP.svg" alt="JPG to PDF" />
              JPG to PDF
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
              to="/excel_to_pdf">
              <img src="/image/JtoP.svg" alt="EXCEL to PDF" />
              EXCEL to PDF
            </NavLink>
          </li>

          <li className="divider" style={{
            border: "1px solid #f6f6f8",
            margin: "7px 20px 7px 5px"
          }}></li>

        </ul>
      </li>

      <li>
        <ul>
          <li>
            <div>Convert from PDF</div>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/pdf_to_jpg">
              <img src="/image/PtoJ.svg" alt="PDF to JPG" />
              PDF to JPG
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

export default AllConvertList;
