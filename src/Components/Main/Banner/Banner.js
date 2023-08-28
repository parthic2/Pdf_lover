import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, createTheme, ThemeProvider, Box } from "@mui/material";
import { getMainApi } from "../../../Redux/Action/HomePage/MainAction";
import Skeleton from "react-loading-skeleton";
import style from "./Banner.module.css";

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

const Banner = () => {
  // For Redux
  const dispatch = useDispatch();
  const { mainData } = useSelector((state) => state.mainReducers);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getMainApi());
    const delay = 100;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dispatch]);

  if (isLoading || !mainData) {
    return (
      <div className={style["home-title"]}>
        <div className={style["skeleton-container"]}>
          <ThemeProvider theme={theme}>
            <Box
              className={style["skeleton-box"]}
              sx={{
                width: "30%",
                mb: 2,
                ...theme.typography.h3,
              }}
            >
              <Skeleton width="100%" height="100%" />
            </Box>
            <Box
              className={style["skeleton-box"]}
              sx={{
                width: "60%",
                ...theme.typography.body1,
              }}
            >
              <Skeleton width="100%" height="100%" />
            </Box>
          </ThemeProvider>
        </div>
      </div>
    );
  }

  const { title, subtitle } = mainData;

  return (
    <div className={style["home-title"]}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" sx={{ color: "black" }}>
          {title}
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
          }}
        >
          {subtitle}
        </Typography>
      </ThemeProvider>
    </div>
  );
};

export default Banner;
