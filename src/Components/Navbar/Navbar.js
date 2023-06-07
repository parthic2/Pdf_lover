import React from "react";
import { Link, NavLink } from "react-router-dom";
import AllToolsList from "./AllTools/AllToolsList";
import { Container } from "@mui/material";
import { FaEllipsisV, FaSortDown } from 'react-icons/fa';

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="header">
        <Container>
          <div className="header__main">
            {/* logo  */}
            <div className="brand">
              <div className="brand__logo">
                <Link to="/" title="PDFLover">
                  <img src="/image/Logo.png" alt="PDFLover" />
                </Link>
              </div>
            </div>

            <div className="top-menu">
              <div className="header__nav">
                <div className="main-menu" id="menuBig">
                  <ul className="nav">
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nav__item--active" : undefined
                        }
                        to="/Merge_PDF">
                        Merge PDF
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nav__item--active" : undefined
                        }
                        to="/Split_PDF">
                        Split PDF
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nav__item--active" : undefined
                        }
                        to="/Compress_PDF">
                        Compress PDF
                      </NavLink>
                    </li>

                    <li className="dropdown dropdown-full" id="menuSmall">
                      <span>
                        All PDF tools{" "}
                        <i className="dropdown__icon">
                          <FaSortDown />
                        </i>
                      </span>

                      <span
                        className="nav__icon dropdown-toggle"
                        data-toggle="dropdown">
                        <i className="fa-solid fa-wrench" />
                      </span>

                      <ul className="dropdown-menu mega menu-full" style={{ overflowX: "auto" }}>
                        <AllToolsList />
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* responsive nav */}
              <div className="header__nav responsive__nav">
                <div className="main-menu" id="menuBig">
                  <ul className="nav">
                    <li className="dropdown dropdown-full" id="menuSmall">
                      <span
                        className="nav__icon__res"
                        data-toggle="dropdown">
                        <FaEllipsisV />
                      </span>

                      <ul className="dropdown-menu mega menu-full" style={{ overflowX: "auto", height: "75vh" }}>
                        <AllToolsList />
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;