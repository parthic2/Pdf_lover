import React from "react";
import { NavLink } from "react-router-dom";

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
              <img src="/image/Rotate.svg" alt="Rotate PDF" />
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
              to="/Add_watermark">
              <img src="/image/Watermark.svg" alt="Add watermark" />
              Add watermark
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
