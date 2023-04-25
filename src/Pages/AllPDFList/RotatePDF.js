import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getRotateApi } from "../../Redux/Action/Pages/RotatePDFAction";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import style from "../Pages.module.css";
import { useNavigate } from "react-router-dom";

const RotatePDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Rotate PDF files.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const rotateData = useSelector((state) => state.rotateReducer.rotateData);
  // console.log(rotateData);

  useEffect(() => {
    dispatch(getRotateApi());
  }, [dispatch]);

  // For Loading data
  const [open, setOpen] = useState(false);

  // For Upload files
  const navigate = useNavigate();

  const [fileList, setFileList] = useState(0);
  const [rotation, setRotation] = useState(0);

  const rotateRight = () => {
    if (rotation === 360) {
      setRotation(0);
    } else {
      setRotation(rotation + 90);
    }

    // setRotation(90);
  };

  // const rotateLeft = () => {
  //   if (rotation === 360) {
  //     setRotation(0);
  //   } else {
  //     setRotation(rotation - 90);
  //   }

  //   // setRotation(90);
  // };

  const handleFileChange = (e) => {
    setFileList(e.target.files);
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
    formData.append("degree", rotation);

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    setOpen(true);

    // 👇 Uploading the files using the fetch API to the server
    try {
      const url = "https://pdflover.stackholic.io/public/api/rotate-pdf";
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setFileList(data);
      // console.log(data);
      // navigate("/");
    } catch (error) {
      // DOMException: The user aborted a request.
      console.log("Error: ", error);
      setOpen(false);
    }
  };

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  const files = fileList ? [...fileList] : [];

  return (
    <>
      <Navbar />

      {rotateData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {rotateData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {rotateData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    component="label"
                    id={style.pickFiles}
                    title={rotateData.button}>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                    <span>{rotateData.button}</span>
                  </Button>

                  <ul>
                    {files.map((file, i) => (
                      <li key={i}>
                        {file.name} - {file.type}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* sidebar  */}
              {fileList.length >= 1 && (
                <div className={style.tool__sidebar} id="sidebar" style={{ overflowY: "auto" }}>
                  <div
                    className={`${style.option__panel} ${style["option__panel--active"]}`}>
                    <div className={style.option__panel__title}>ROTATE PDF</div>

                    <div className={style.option__panel__content}>
                      <div className={style.info}>
                        Mouse over PDF file below and a icon will appear, click
                        on it to rotate your PDFs.
                      </div>
                    </div>
                  </div>
                  <p className={style.rotate}>ROTATION</p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className={style["button-70"]} onClick={rotateRight}>
                      Right
                    </div>
                    {rotation}

                    {/* <div className={style["button-70"]} onClick={rotateRight}>
                      Right
                    </div> */}
                  </div>

                  {open && <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>}

                  <Box height={25} />
                  <button
                    onClick={handleUploadClick}
                    className={style["btn--red"]}
                    id={style.processTask}
                  >
                    Rotate PDF
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
            <div className={style.footer__copy}>{rotateData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default RotatePDF;
