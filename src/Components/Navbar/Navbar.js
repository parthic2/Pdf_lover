import React from "react";
import { Link, NavLink } from "react-router-dom";
import AllToolsList from "./AllTools/AllToolsList";

import Logo from "../../Assets/image/Logo.png";

import "./Navbar.css";
import { Container } from "@mui/material";

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
                  <img src={Logo} alt="PDFLover" />
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
                        <i
                          className="fa-solid fa-caret-down"
                          style={{ marginLeft: "10px" }}
                        />
                      </span>

                      <span
                        className="nav__icon dropdown-toggle"
                        data-toggle="dropdown">
                        <i className="fa-solid fa-wrench" />
                      </span>

                      <ul className="dropdown-menu mega menu-full" style={{ height: "35em" }}>
                        <AllToolsList />
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="header__nav responsive__nav">
                <div className="main-menu" id="menuBig">
                  <ul className="nav">
                    <li className="dropdown dropdown-full" id="menuSmall">
                      <span
                        className="nav__icon__res"
                        data-toggle="dropdown">
                        <i className="fa-solid fa-bars-staggered" />
                      </span>

                      <ul className="dropdown-menu mega menu-full" style={{ height: "35em" }}>
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