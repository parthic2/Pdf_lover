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
              to="/word_to_pdf">
              <img src="/image/JtoP.svg" alt="WORD to PDF" />
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
              <img src="/image/PtoE.svg" alt="POWERPOINT to PDF" />
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

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item--active" : undefined
              }
              to="/pdf_to_word">
              <img src="/image/PtoW.svg" alt="PDF to WORD" />
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
              <img src="/image/PtoP.svg" alt="PDF to POWERPOINT" />
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
              <img src="/image/PtoE.svg" alt="PDF to EXCEL" />
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
              <img src="/image/PtoJ.svg" alt="PDF to PDF/A" />
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
