import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrustedApi } from "../../Redux/Action/HomePage/TrustedAction";

import style from "./TrustSection.module.css";

const TrustSection = () => {
  // For Redux
  const dispatch = useDispatch();

  const trustedData = useSelector((state) => state.trustedReducers.trustedData);
  // console.log(trustedData);

  useEffect(() => {
    dispatch(getTrustedApi());
  }, [dispatch]);

  return (
    <div className={`${style.block} ${style["block--grey-admin"]}`}>
      <Container>
        {trustedData && (
          <div className={style.block__header}>
            <Typography variant="h4">{trustedData.heading}</Typography>

            <Typography
              variant="subtitle1"
              sx={{ color: "#383e45", fontSize: "20px" }}>
              {trustedData.subHeading}
            </Typography>
          </div>
        )}
      </Container>
    </div>
  );
};

export default TrustSection;
