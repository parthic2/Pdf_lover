import React from "react";
import { Link } from "react-router-dom";
import HelpList from "./Help/HelpList";
import ProductList from "./Productlist/ProductList";

const HumBurgerList = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="nav__item--sub">
          <ProductList />
        </li>

        <li>
          <Link to="/Pricing">Pricing</Link>
        </li>

        <li className="divider"></li>

        <li className="nav__item--sub">
          <HelpList />
        </li>

      </ul>
    </>
  );
};

export default HumBurgerList;
