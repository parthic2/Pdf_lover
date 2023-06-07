import React from "react";
import { NavLink } from "react-router-dom";

const OrganizeList = () => {
  return (
    <>
      <li>
        <ul>
          <li>
            <div>Organize PDF</div>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Merge_PDF">
              <img src="/image/Merger.svg" alt="Merger PDF" />
              Merger PDF
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
              to="/Split_PDF">
              <img src="/image/Merger.svg" alt="Split PDF" />
              Split PDF
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
              to="/Split_PDF">
              <img src="/image/Merger.svg" alt="Extract pages" />
              Extract pages
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

export default OrganizeList;
