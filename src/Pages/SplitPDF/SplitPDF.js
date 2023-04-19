import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getSplitApi } from "../../Redux/Action/Pages/SplitAction";
import { useNavigate } from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import style from "../Pages.module.css";

const SplitPDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Split PDF files online.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const splitData = useSelector((state) => state.splitReducer.splitData);
  // console.log(splitData);

  useEffect(() => {
    dispatch(getSplitApi());
  }, [dispatch]);

  // For Loading data
  const [open, setOpen] = useState(false);

  // For Upload files
  const navigate = useNavigate();

  const [fileList, setFileList] = useState(0);

  const [range, setRange] = useState(0);

  const handleFileChange = (e) => {
    setFileList(e.target.files);
    setRange("1-5");
  };

  const handleUploadClick = async () => {
    if (!fileList) {
      return;
      // console.log("error");
    }

    // 👇 Create new FormData object and append files
    var formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("file", fileList[i]);
    }
    formData.append("range", range);

    var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    setOpen(true);

    // 👇 Uploading the files using the fetch API to the server
    try {
      const url = "http://pdflover.stackholic.io/public/api/split-pdf-merge";
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setFileList(data);
      // console.log(data);
      navigate("/");
    } catch (error) {
      // DOMException: The user aborted a request.
      console.log("Error: ", error);
      setOpen(false);
    }
  };


  return (
    <>
      <Navbar />

      {splitData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {splitData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {splitData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    component="label"
                    id={style.pickFiles}
                    title={splitData.button}>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                    <span>{splitData.button}</span>
                  </Button>
                </div>
              </div>

              {/* sidebar  */}
              {fileList.length >= 1 && (
                <div className={style.tool__sidebar} id="sidebar">
                  {/* <div className={style.tool__sidebar__inactive}>
                    <p>please select a file</p>
                    <p>Please add a file to activate options</p>
                  </div> */}
                  <div
                    className={`${style.option__panel} ${style["option__panel--active"]}`}>
                    <div className={style.option__panel__title}>SPLIT PDF</div>

                    {/* <div className={style.option__panel__content}>
                      <div className={style.info}>
                        Mouse over PDF file below and a icon will appear, click
                        on it to rotate your PDFs.
                      </div>
                    </div> */}
                  </div>

                  {open && <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>}

                  <button
                    onClick={handleUploadClick}
                    className={style["btn--red"]}>
                    Split PDF
                    <i
                      className="fa-sharp fa-regular fa-circle-right"
                      style={{ marginLeft: "15px" }}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{splitData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default SplitPDF;