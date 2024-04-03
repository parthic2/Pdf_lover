import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import style from "./PreSection.module.css";

const PreSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [preSection, setPreSection] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_JSON_URL}/homepage`);
      const data = await response.json();
      setPreSection(data.premium);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const { heading, subHeading, subHeading1, button } = preSection;

  return (
    <Box
      className={style.pre__box}
    >
      {isLoading ? (
        <>
          <Box
            className={style["skeleton-box"]}
            sx={{
              width: "30%",
            }}
          >
            <Skeleton width="100%" height="100%" />
          </Box>
          <Box
            className={style["skeleton-box"]}
            sx={{
              width: "80%",
            }}
          >
            <Skeleton width="100%" height="100%" />
          </Box>
          <Box
            className={style["skeleton-box"]}
            sx={{
              width: "10%",
            }}
          >
            <Skeleton width="100%" height="100%" />
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ textAlign: "center" }}>
            <h1
              className={style.pre__text}
            >
              {heading}
            </h1>

            <p
              className={style.pre__subtext}
            >
              {subHeading}
              <br />
              {subHeading1}
            </p>
          </Box>

          <Link to="" className={style["button-71"]}>
            {button}
          </Link>
        </>
      )}
    </Box>
  );
};

export default PreSection;
