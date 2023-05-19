import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPremiumApi } from "../../Redux/Action/HomePage/PremiumAction";

import style from "./PreSection.module.css";

const PreSection = () => {
  const CustomContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#FE4F62",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  // For Redux
  const dispatch = useDispatch();

  const premiumData = useSelector((state) => state.premiumReducers.premiumData);

  useEffect(() => {
    dispatch(getPremiumApi());
  }, [dispatch]);

  return (
    <CustomContainer>
      {premiumData && (
        <>
          <Box sx={{ textAlign: "center" }}>
            <h1
              style={{ fontSize: "35px", color: "white", fontWeight: "700" }}>
              {premiumData.heading}
            </h1>

            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "500",
                padding: "20px"
              }}>
              {premiumData.subHeading}
              <br />
              {premiumData.subHeading1}
            </Typography>
          </Box>

          <Link to="" className={style["button-71"]}>
            {premiumData.button}
          </Link>
        </>
      )}
    </CustomContainer>
  );
};

export default PreSection;
