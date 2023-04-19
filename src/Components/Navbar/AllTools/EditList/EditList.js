import React from "react";
import { NavLink } from "react-router-dom";
import Rotate from "../../../../Assets/image/Rotate.png";
import PageNumber from "../../../../Assets/image/PageNumber.png";
import Watermark from "../../../../Assets/image/Watermark.png";
import Edit from "../../../../Assets/image/Edit.png";

const EditList = () => {
  return (
    <>
      <li>
        <ul>
          <li>
            <div>Edit PDF</div>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Rotate_PDF">
              <img src={Rotate} alt="Rotate PDF" />
              Rotate PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Add_page_numbers">
              <img src={PageNumber} alt="Add page numbers" />
              Add page numbers
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Add_watermark">
              <img src={Watermark} alt="Add watermark" />
              Add watermark
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Edit_PDF">
              <img src={Edit} alt="Edit PDF" />
              Edit PDF
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
};

export default EditList;
