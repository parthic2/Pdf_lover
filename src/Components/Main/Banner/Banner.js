import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getMainApi } from "../../../Redux/Action/HomePage/MainAction";

import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";

import style from "./Banner.module.css";

const Banner = () => {
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "50px",
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
  // console.log(mainData);

  useEffect(() => {
    dispatch(getMainApi());
  }, [dispatch]);

  return (
    <>
      {mainData && (
        <div className={style["home-title"]}>
          <>
            <ThemeProvider theme={theme}>
              <Typography variant="h3" sx={{ color: "white" }}>
                {mainData.title}
                {/* Every tool you need to work with PDFs in one place */}
              </Typography>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  maxWidth: "980px",
                  margin: "auto auto 28px",
                  fontSize: "22px",
                }}>
                {mainData.subtitle}
                {/* Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks. */}
              </Typography>
            </ThemeProvider>
          </>
        </div>
      )}
    </>
  );
};

export default Banner;
