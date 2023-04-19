import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getRemovePageApi } from "../../Redux/Action/Pages/RemovePDFPageAction";

import style from "../Pages.module.css";

const RemovePDFPage = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Remove pages from a PDF.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const removePageData = useSelector(
    (state) => state.removePageReducer.removePageData
  );
  // console.log(removePageData);

  useEffect(() => {
    dispatch(getRemovePageApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {removePageData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {removePageData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {removePageData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={removePageData.button}>
                    <span>{removePageData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{removePageData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default RemovePDFPage;
