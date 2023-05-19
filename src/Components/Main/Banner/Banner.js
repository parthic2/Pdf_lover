import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getMainApi } from "../../../Redux/Action/HomePage/MainAction";

import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";

import style from "./Banner.module.css";

const Banner = () => {
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "40px",
    fontWeight: "400",
    lineHeight: "46px",
    margin: "15px auto 0px",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width:590px)": {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.8rem",
    },
  };

  theme.typography.body1 = {
    fontSize: "20px",
    lineHeight: "30px",
    "@media (max-width:590px)": {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
    },
  };

  // For Redux
  const dispatch = useDispatch();

  const mainData = useSelector((state) => state.mainReducers.mainData);

  useEffect(() => {
    dispatch(getMainApi());
  }, [dispatch]);

  return (
    <>
      {mainData && (
        <div className={style["home-title"]}>
          <>
            <ThemeProvider theme={theme}>
              <Typography variant="h3" sx={{ color: "black" }}>
                {mainData.title}
              </Typography>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
              <Typography
                variant="body1"
                sx={{
                  color: "#383e45",
                  maxWidth: "980px",
                  margin: "15px auto 28px",
                  fontSize: "20px",
                }}>
                {mainData.subtitle}
              </Typography>
            </ThemeProvider>
          </>
        </div>
      )}
    </>
  );
};

export default Banner;
