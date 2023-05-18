import React from "react";
import { Link, NavLink } from "react-router-dom";
import AllToolsList from "./AllTools/AllToolsList";
import ConvertList from "./CovertList/ConvertList";
import HumBurgerList from "./HumburgerList/HumBurgerList";

import Logo from "../../Assets/image/Logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="header">
        <div className="header__main">
          {/* logo  */}
          <div className="brand">
            <div className="brand__logo">
              <Link to="/" title="PDFLover">
                <img src={Logo} alt="PDFLover" />
              </Link>
            </div>
          </div>

          {/* Navbar left data  */}
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

                <li className="dropdown dropdown-full">
                  <NavLink
                  // className={({ isActive }) =>
                  //   isActive ? "nav__item--active" : undefined
                  // }
                  // to="/jpg_to_pdf"
                  // end
                  >
                    Convert PDF{" "}
                    <i
                      className="fa-solid fa-caret-down"
                      style={{ marginLeft: "10px" }}
                    />
                  </NavLink>
                  <ul className="dropdown-menu mega menu-full menu-full--convert">
                    <ConvertList />
                  </ul>
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

          {/* Navbar Right Data */}
          <div
            className="desktop tooltip tooltip--bottom"
            title="PDFLover Desktop, work offline">
            <Link to="" title="Desktop">
              <i className="fa-solid fa-desktop" />
            </Link>
          </div>

          <div className="top-menu">
            <ul className="nav">
              <li className="nav__item nav__item--gray">
                <Link to="/Login">
                  <span>Log in</span>
                </Link>
              </li>

              <li className="nav__item nav__item--red">
                <Link to="/Register">
                  <i className="fa-solid fa-user-large" />
                  <span>Sign up</span>
                </Link>
              </li>

              <li className="nav__item nav__item--sub">
                <i className="fa-solid fa-bars-staggered" />
                <HumBurgerList />
              </li>
            </ul>

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
      </div>
    </>
  );
};

export default Navbar;