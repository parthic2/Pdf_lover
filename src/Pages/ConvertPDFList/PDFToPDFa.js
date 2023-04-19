import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getPDFtoPDFaApi } from "../../Redux/Action/Pages/PDFToPDFaAction";

import style from "../Pages.module.css";

const PDFToPDFa = () => {

// For Change title dynamically
useEffect(() => {
  document.title = "Convert PDF to PDF/A.";
}, []);

  // For Redux
  const dispatch = useDispatch();

  const PtoPaData = useSelector((state) => state.PDFtoPDFaReducer.PtoPaData);
  // console.log(PtoPaData);

  useEffect(() => {
    dispatch(getPDFtoPDFaApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {PtoPaData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {PtoPaData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {PtoPaData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={PtoPaData.button}>
                    <span>{PtoPaData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{PtoPaData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default PDFToPDFa;
