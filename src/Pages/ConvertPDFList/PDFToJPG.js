import { Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { getPdfToJpgApi } from "../../Redux/Action/Pages/PDFToJPGAction";

import { AiOutlineSetting } from 'react-icons/ai';

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import style from "../Pages.module.css";

const PDFToJPG = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Convert PDF to JPG.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const PtoJData = useSelector((state) => state.PDFtoJPGReducer.PtoJData);
  // console.log(PtoJData);

  useEffect(() => {
    dispatch(getPdfToJpgApi());
  }, [dispatch]);

  // For Loading data
  const [open, setOpen] = useState(false);

  // For Upload File
  const navigate = useNavigate();

  const [fileList, setFileList] = useState(0);

  const pageNumber = 1;

  const handleFileChange = (e) => {
    const fileList = e.target.files;
    const fileArray = Array.from(fileList);
    setFileList(fileArray);
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

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    setOpen(true);

    // 👇 Uploading the files using the fetch API to the server
    try {
      const url = "https://pdflover.stackholic.io/public/api/pdf-to-images";
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setFileList(data);
      // console.log(data);
      navigate("/Download_Merge_PDF");
    } catch (error) {
      // DOMException: The user aborted a request.
      console.log("Error: ", error);
      setOpen(false);
    }
  };

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  const files = fileList ? [...fileList] : [];

  // For Sidebar
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();

  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Navbar />

      {PtoJData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__title}>
                    {PtoJData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__subtitle}>
                    {PtoJData.subTitle}
                  </Typography>
                </div>

                <div className={style.side_btn}>
                  <button className={style.toggle__btn} onClick={toggleCart}>
                    <AiOutlineSetting />
                  </button>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    component="label"
                    id={style.pickFiles}
                    title={PtoJData.button}>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                    <span>{PtoJData.button}</span>
                  </Button>
                </div>

                {/* For Pdf View */}
                <div className={style.tool__workarea__display}>
                  {files.map((file, i) => (
                    <div className={style.tool__workarea__rendered} key={i}>
                      <div className={style.file}>
                        <div className={style.file__canvas}>
                          <Document file={file}>
                            <Page pageNumber={pageNumber} />
                          </Document>
                        </div>

                        <div className={style.file__info}>
                          <span className={style.file__info__name}>{file.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* sidebar  */}
              {fileList.length >= 1 && (
                <div className={style.tool__sidebar} id="sidebar" style={{ overflowY: "auto" }}>
                  <div
                    className={`${style.option__panel} ${style["option__panel--active"]}`}>
                    <div className={style.option__panel__title}>
                      PDF TO JPG OPTIONS
                    </div>

                    <div className={style.option__panel__content}>
                      <div className={style.info}>
                        Every page of this PDF will be converted into a JPG file.
                      </div>
                    </div>
                  </div>

                  {open && <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>}

                  <button
                    onClick={handleUploadClick}
                    className={style["btn--red"]}
                    id={style.processTask}
                  >
                    Convert to JPG
                    <i
                      className="fa-sharp fa-regular fa-circle-right"
                      style={{ marginLeft: "15px" }}
                    />
                  </button>
                </div>
              )}


              {/* Mobile phone */}
              {
                sidebar && (
                  <div className={style.mobile__sidebar}>
                    {
                      sidebar && (
                        <div>
                          {fileList.length >= 1 && (
                            <>
                              <div ref={ref} className={style.mobile__sidebar} id={style.mobileSidebar} style={{ overflowY: "auto" }}>
                                <div
                                  className={`${style.option__panel} ${style["option__panel--active"]}`}>
                                  <div className={style.option__panel__title}>
                                    PDF TO JPG OPTIONS
                                  </div>

                                  <div className={style.option__panel__content}>
                                    <div className={style.info}>
                                      Every page of this PDF will be converted into a JPG file.
                                    </div>
                                  </div>
                                </div>

                                {open && <Backdrop
                                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                  open={open}
                                >
                                  <CircularProgress color="inherit" />
                                </Backdrop>}

                                <button
                                  onClick={handleUploadClick}
                                  className={style["btn--red"]}
                                  id={style.processTask}
                                >
                                  Convert to JPG
                                  <i
                                    className="fa-sharp fa-regular fa-circle-right"
                                    style={{ marginLeft: "15px" }}
                                  />
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      )
                    }
                  </div>
                )
              }
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{PtoJData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default PDFToJPG;
