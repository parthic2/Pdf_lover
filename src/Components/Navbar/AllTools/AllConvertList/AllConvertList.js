import React from "react";
import { NavLink } from "react-router-dom";
import PtoE from "../../../../Assets/image/PtoE.svg";
import PtoP from "../../../../Assets/image/PtoP.svg";
import PtoW from "../../../../Assets/image/PtoW.svg";
import PtoJ from "../../../../Assets/image/PtoJ.svg";
import JtoP from "../../../../Assets/image/JtoP.svg";

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
              <img src={JtoP} alt="JPG to PDF" />
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
              to="/word_to_pdf">
              <img src="" alt="WORD to PDF" />
              WORD to PDF
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
              to="/powerpoint_to_pdf">
              <img src="" alt="POWERPOINT to PDF" />
              POWERPOINT to PDF
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
              <img src="" alt="EXCEL to PDF" />
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
              <img src={PtoJ} alt="PDF to JPG" />
              PDF to JPG
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
              to="/pdf_to_word">
              <img src={PtoW} alt="PDF to WORD" />
              PDF to WORD
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
              to="/pdf_to_powerpoint">
              <img src={PtoP} alt="PDF to POWERPOINT" />
              PDF to POWERPOINT
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
              to="/pdf_to_excel">
              <img src={PtoE} alt="PDF to EXCEL" />
              PDF to EXCEL
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
              to="/pdf_to_pdf/a">
              <img src="" alt="PDF to PDF/A" />
              PDF to PDF/A
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
