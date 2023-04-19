import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getPDFtoPOWERApi } from "../../Redux/Action/Pages/PDFToPowerPointAction";

import style from "../Pages.module.css";

const PDFToPowerPoint = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Convert PDF to POWERPOINT.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const PtoPData = useSelector((state) => state.PDFtoPOWERReducer.PtoPData);
  // console.log(PtoPData);

  useEffect(() => {
    dispatch(getPDFtoPOWERApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {PtoPData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {PtoPData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {PtoPData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={PtoPData.button}>
                    <span>{PtoPData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{PtoPData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default PDFToPowerPoint;
