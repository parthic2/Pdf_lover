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
    setTimeout(() => {
      dispatch(getPremiumApi());
      setIsLoading(false)
    }, 2000);
  }, [dispatch]);

  if (!premiumData) {
    return;
  }

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
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.11)",
              p: 2,
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30%",
              height: "10px",
            }}
          >
            <Skeleton width="100%" height="100%" />
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.11)",
              p: 2,
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              height: "20px",
            }}
          >
            <Skeleton width="100%" height="100%" />
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.11)",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "10%",
              height: "20px",
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
