import { Button, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getUnlockApi } from "../../Redux/Action/Pages/UnlockPDFAction";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { AiOutlineSetting } from 'react-icons/ai';

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import style from "../Pages.module.css";
import { useNavigate } from "react-router-dom";

const UnlockPDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Unlock PDF files. Remove PDF password.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const unlockData = useSelector((state) => state.unlockReducer.unlockData);
  // console.log(unlockData);

  useEffect(() => {
    dispatch(getUnlockApi());
  }, [dispatch]);

  // For Loading data
  const [open, setOpen] = useState(false);

  // For Upload File
  const navigate = useNavigate();

  const [fileList, setFileList] = useState(0);
  const [password, setPassword] = useState("");

  const pageNumber = 1;

  const handleFileChange = (e) => {
    const fileList = e.target.files;
    const fileArray = Array.from(fileList);
    setFileList(fileArray);
    setPassword(e.target.value);
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
    formData.append("password", password);

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    setOpen(true);

    // 👇 Uploading the files using the fetch API to the server
    try {
      const url = "https://pdflover.stackholic.io/public/api/unlock-pdf";
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

      {unlockData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__title}>
                    {unlockData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__subtitle}>
                    {unlockData.subTitle}
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
                    title={unlockData.button}>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                    <span>{unlockData.button}</span>
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


              {/* For Sidebar */}
              {
                fileList.length >= 1 && (
                  <>
                    {/* Desktop */}
                    <div className={style.tool__sidebar} id={style.sidebar} style={{ overflowY: "auto" }}>
                      <div
                        className={`${style.option__panel} ${style["option__panel--active"]}`}>
                        <div className={style.option__panel__title}>UNLOCK PDF</div>

                        <div className={style.option__panel__content}>
                          <div className={style.info}>
                            Just press the unlock button.
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
                        Unlock PDF
                        <i
                          className="fa-sharp fa-regular fa-circle-right"
                          style={{ marginLeft: "15px" }}
                        />
                      </button>
                    </div>

                    {/* Mobile */}
                    {sidebar && (
                      <div className={style.mobile__sidebar}>
                        {fileList.length >= 1 && (
                          <>
                            <div ref={ref} className={style.mobile__sidebar} id={style.mobileSidebar} style={{ overflowY: "auto" }}>
                              <div
                                className={`${style.option__panel} ${style["option__panel--active"]}`}>
                                <div className={style.option__panel__title}>UNLOCK PDF</div>

                                <div className={style.option__panel__content}>
                                  <div className={style.info}>
                                    Just press the unlock button.
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
                                Unlock PDF
                                <i
                                  className="fa-sharp fa-regular fa-circle-right"
                                  style={{ marginLeft: "15px" }}
                                />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </>
                )
              }

            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{unlockData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default UnlockPDF;
