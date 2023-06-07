import { Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPremiumApi } from "../../Redux/Action/HomePage/PremiumAction";

import style from "./PreSection.module.css";

const PreSection = () => {
  const dispatch = useDispatch();
  const premiumData = useSelector((state) => state.premiumReducers.premiumData);

  useEffect(() => {
    dispatch(getPremiumApi());
  }, [dispatch]);

  if (!premiumData) {
    // Render skeleton loading state
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
        <Skeleton
          variant="rectangular"
          width={300}
          height={40}
          animation="wave"
          style={{ marginBottom: 20 }}
        />
        <Skeleton
          variant="rectangular"
          width={600}
          height={60}
          animation="wave"
          style={{ marginBottom: 20 }}
        />
        <Skeleton
          variant="rectangular"
          width={150}
          height={50}
          animation="wave"
        />
      </Box>
    );
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
    </Box>
  );
};

export default PreSection;
