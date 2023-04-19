import React from "react";
import { NavLink } from "react-router-dom";

import Merger from "../../../../Assets/image/Merge.png";
import Split from "../../../../Assets/image/Split.png";
import Organize from "../../../../Assets/image/Organize.png";

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
              <img src={Merger} alt="Merger PDF" />
              Merger PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Split_PDF">
              <img src={Split} alt="Split PDF" />
              Split PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Remove_pages">
              <img src="" alt="Remove pages" />
              Remove pages
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Split_PDF">
              <img src="" alt="Extract pages" />
              Extract pages
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Organize_PDF">
              <img src={Organize} alt="Organize PDF" />
              Organize PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="">
              <img src="" alt="Scan to PDF" />
              Scan to PDF
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
};

export default OrganizeList;
