import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { Button, Typography } from "@mui/material";
import { getWORDtoPDFApi } from "../../Redux/Action/Pages/WORDToPDFAction";

import style from "../Pages.module.css";

const WORDToPDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Convert WORD to PDF.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const wtoPData = useSelector((state) => state.WORDtoPDFReducer.wtoPData);
  // console.log(wtoPData);

  useEffect(() => {
    dispatch(getWORDtoPDFApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {wtoPData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {wtoPData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {wtoPData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={wtoPData.button}>
                    <span>{wtoPData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{wtoPData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default WORDToPDF;
