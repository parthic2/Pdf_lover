import { Box } from "@mui/material";
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
    dispatch(getPremiumApi())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  const { heading, subHeading, subHeading1, button } = premiumData;

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
