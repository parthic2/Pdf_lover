import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getAddPgNumApi } from "../../Redux/Action/Pages/AddPageNumberAction";

import style from "../Pages.module.css";

const AddPageNumber = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Add page number to a PDF files.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const addPgNoData = useSelector((state) => state.addPgNumReducer.addPgNoData);
  // console.log(addPgNoData);

  useEffect(() => {
    dispatch(getAddPgNumApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {addPgNoData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {addPgNoData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {addPgNoData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={addPgNoData.button}>
                    <span>{addPgNoData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{addPgNoData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default AddPageNumber;
