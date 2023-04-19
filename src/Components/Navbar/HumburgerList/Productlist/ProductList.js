import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <>
      <Link to="">Product</Link>

      <ul className="product__menu">
        <li>
          <Link to="">Desktop</Link>
        </li>
        <li>
          <Link to="">Mobile</Link>
        </li>
        <li>
          <Link to="">API Rest</Link>
        </li>
      </ul>
    </>
  );
};

export default ProductList;
