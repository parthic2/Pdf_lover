import React from "react";
import { Link } from "react-router-dom";

const HelpList = () => {
  return (
    <>
      <Link>Help</Link>

      <ul>
        <li>
          <Link to="/FAQ">FAQ</Link>
        </li>
        <li>
          <Link to="/Tools">Tools</Link>
        </li>
        <li>
          <Link to="/Legal"> Legal &amp;Privacy</Link>
        </li>
      </ul>
    </>
  );
};

export default HelpList;
