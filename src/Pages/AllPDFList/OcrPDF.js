import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getOcrApi } from "../../Redux/Action/Pages/OcrPDFAction";

import style from "../Pages.module.css";

const OcrPDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Make PDF searchable.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const ocrData = useSelector((state) => state.ocrReducer.ocrData);
  // console.log(ocrData);

  useEffect(() => {
    dispatch(getOcrApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {ocrData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__title}>
                    {ocrData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__subtitle}>
                    {ocrData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={ocrData.button}>
                    <span>{ocrData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{ocrData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default OcrPDF;
