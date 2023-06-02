import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getEditApi } from "../../Redux/Action/Pages/EditPDFAction";

import style from "../Pages.module.css";

const EditPDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Edit PDF files.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const editData = useSelector((state) => state.editReducer.editData);
  // console.log(editData);

  useEffect(() => {
    dispatch(getEditApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {editData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__title}>
                    {editData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__subtitle}>
                    {editData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={editData.button}>
                    <span>{editData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{editData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default EditPDF;
