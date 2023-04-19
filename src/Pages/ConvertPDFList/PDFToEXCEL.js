import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getPDFtoEXCELApi } from "../../Redux/Action/Pages/PDFToEXCELAction";

import style from "../Pages.module.css";

const PDFToEXCEL = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Convert PDF to EXCEL.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const PtoEData = useSelector((state) => state.PDFtoEXCELReducer.PtoEData);
  // console.log(PtoEData);

  useEffect(() => {
    dispatch(getPDFtoEXCELApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {PtoEData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {PtoEData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {PtoEData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={PtoEData.button}>
                    <span>{PtoEData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{PtoEData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default PDFToEXCEL;
