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
              <img src="/image/Rotate.svg" alt="Rotate PDF" loading="lazy" />
              Rotate PDF
            </NavLink>
          </li>

          <li className="divider"></li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/Add_watermark">
              <img src="/image/Watermark.svg" alt="Add watermark" loading="lazy" />
              Add watermark
            </NavLink>
          </li>

          <li className="divider"></li>

        </ul>
      </li>
    </>
  );
};

export default EditList;
