import React from "react";
import { NavLink } from "react-router-dom";
import Rotate from "../../../../Assets/image/Rotate.svg";
import PageNumber from "../../../../Assets/image/PageNumber.svg";
import Watermark from "../../../../Assets/image/Watermark.svg";
import Edit from "../../../../Assets/image/Edit.svg";

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

          <li className="divider" style={{
            border: "1px solid #f6f6f8",
            margin: "7px 20px 7px 5px"
          }}></li>

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

          <li className="divider" style={{
            border: "1px solid #f6f6f8",
            margin: "7px 20px 7px 5px"
          }}></li>

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

          <li className="divider" style={{
            border: "1px solid #f6f6f8",
            margin: "7px 20px 7px 5px"
          }}></li>

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

          <li className="divider" style={{
            border: "1px solid #f6f6f8",
            margin: "7px 20px 7px 5px"
          }}></li>

        </ul>
      </li>
    </>
  );
};

export default EditList;
