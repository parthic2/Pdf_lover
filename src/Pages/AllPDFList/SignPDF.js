import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getSignApi } from "../../Redux/Action/Pages/SignPDFAction";

import style from "../Pages.module.css";

const SignPDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Sign Digital Signature in PDF files.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const signData = useSelector((state) => state.signReducer.signData);
  // console.log(signData);

  useEffect(() => {
    dispatch(getSignApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {signData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {signData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {signData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={signData.button}>
                    <span>{signData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{signData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default SignPDF;
