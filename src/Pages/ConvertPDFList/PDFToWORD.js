import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getPDFtoWORDApi } from "../../Redux/Action/Pages/PDFToWORDAction";

import style from "../Pages.module.css";

const PDFToWORD = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Convert PDF to WORD.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const PtoWData = useSelector((state) => state.PDFtoWORDReducer.PtoWData);
  // console.log(PtoWData);

  useEffect(() => {
    dispatch(getPDFtoWORDApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {PtoWData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {PtoWData.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {PtoWData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={PtoWData.button}>
                    <span>{PtoWData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{PtoWData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default PDFToWORD;
