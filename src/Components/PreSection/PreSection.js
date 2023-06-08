import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPremiumApi } from "../../Redux/Action/HomePage/PremiumAction";
import Skeleton from "react-loading-skeleton";

import style from "./PreSection.module.css";

const PreSection = () => {
  const dispatch = useDispatch();
  const premiumData = useSelector((state) => state.premiumReducers.premiumData);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2000;
    const timer = setTimeout(() => {
      dispatch(getPremiumApi());
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const { heading, subHeading, subHeading1, button } = premiumData;

  return (
    <Box
      sx={{
        backgroundColor: "#FE4F62",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "auto",
      }}
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
            <Typography
              variant="h1"
              sx={{
                fontSize: "35px",
                color: "white",
                fontWeight: "700",
              }}
            >
              {heading}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "500",
                padding: "20px",
              }}
            >
              {subHeading}
              <br />
              {subHeading1}
            </Typography>
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
