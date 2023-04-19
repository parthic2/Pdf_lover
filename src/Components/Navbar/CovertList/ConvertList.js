import React from "react";
import { NavLink } from "react-router-dom";
import PtoE from "../../../Assets/image/PtoE.png";
import PtoP from "../../../Assets/image/PtoP.png";
import PtoW from "../../../Assets/image/PtoW.png";
import PtoJ from "../../../Assets/image/PtoJ.png";
import JtoP from "../../../Assets/image/JtoP.png";

const ConvertList = () => {
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
              <img src={JtoP} alt="JPG to PDF" />
              JPG to PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/word_to_pdf">
              <img src="" alt="WORD to PDF" />
              WORD to PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/powerpoint_to_pdf">
              <img src="" alt="POWERPOINT to PDF" />
              POWERPOINT to PDF
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/excel_to_pdf">
              <img src="" alt="EXCEL to PDF" />
              EXCEL to PDF
            </NavLink>
          </li>
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
              <img src={PtoJ} alt="PDF to JPG" />
              PDF to JPG
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/pdf_to_word">
              <img src={PtoW} alt="PDF to WORD" />
              PDF to WORD
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/pdf_to_powerpoint">
              <img src={PtoP} alt="PDF to POWERPOINT" />
              PDF to POWERPOINT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/pdf_to_excel">
              <img src={PtoE} alt="PDF to EXCEL" />
              PDF to EXCEL
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/pdf_to_pdf/a">
              <img src="" alt="PDF to PDF/A" />
              PDF to PDF/A
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
};

export default ConvertList;
