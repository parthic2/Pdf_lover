import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getOrganizeApi } from "../../Redux/Action/Pages/OrganizePDFAction";

import style from "../Pages.module.css";

const OrganizePDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Organize PDF files.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const organizeData = useSelector(
    (state) => state.organizeReducer.organizeData
  );
  // console.log(organizeData);

  useEffect(() => {
    dispatch(getOrganizeApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {organizeData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {organizeData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {organizeData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    id={style.pickFiles}
                    title={organizeData.button}>
                    <span>{organizeData.button}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{organizeData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default OrganizePDF;
