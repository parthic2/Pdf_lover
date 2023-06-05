import { Button, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getSplitApi } from "../../Redux/Action/Pages/SplitAction";
import { useNavigate } from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { AiOutlineSetting } from 'react-icons/ai';

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

  const [fileList, setFileList] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileList(selectedFile);
    setPageCount(0);
    setStartPage(0);
    setEndPage(0);

    const reader = new FileReader();
    reader.onload = async (event) => {
      const typedArray = new Uint8Array(event.target.result);
      const pdf = await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.js';
        script.onload = () => {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.js';

          const loadingTask = window.pdfjsLib.getDocument(typedArray);
          loadingTask.promise.then((pdfDocument) => {
            resolve(pdfDocument);
          }).catch((error) => {
            reject(error);
          });
        };
        document.body.appendChild(script);
      });

      const numPages = pdf.numPages;
      setPageCount(numPages);
      setStartPage(1);
      setEndPage(numPages);
    };

    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  const handleStartPageChange = (e) => {
    const value = Number(e.target.value);
    setStartPage(value);
    setEndPage(Math.max(value, endPage));
  };

  const handleLastPageChange = (e) => {
    const value = Number(e.target.value);
    setEndPage(value);
    setStartPage(Math.min(value, startPage));
  };

  const handleUploadClick = async () => {
    if (!fileList) {
      return;
    }

    // 👇 Create new FormData object and append files
    var formData = new FormData();
    formData.append("file", fileList);
    formData.append("range", `${startPage}-${endPage}`);

    var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    setOpen(true);

    // 👇 Uploading the files using the fetch API to the server
    try {
      const url = "https://pdflover.stackholic.io/public/api/split-pdf-merge";
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

  // For Sidebar
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();

  const toggleCart = () => {
    setSidebar(!sidebar);
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
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__title}>
                    {splitData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__subtitle}>
                    {splitData.subTitle}
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
              {fileList && (
                <div className={style.tool__sidebar} id="sidebar" style={{ overflowY: "auto" }}>
                  <div
                    className={`${style.option__panel} ${style["option__panel--active"]}`}>
                    <div className={style.option__panel__title}>SPLIT PDF</div>

                    {open && <Backdrop
                      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                      open={open}
                    >
                      <CircularProgress color="inherit" />
                    </Backdrop>}

                    <p className={style.range_mode}>custom mode:</p>

                    <div className={style.page__range}>
                      <label htmlFor="startPageInput">From Page:</label>
                      <input
                        type="number"
                        id={style.startPageInput}
                        min={1}
                        max={pageCount}
                        value={startPage}
                        onChange={handleStartPageChange}
                      />
                      <label htmlFor="lastPageInput">To Page:</label>
                      <input
                        type="number"
                        id={style.lastPageInput}
                        min={1}
                        max={pageCount}
                        value={endPage}
                        onChange={handleLastPageChange}
                      />
                    </div>

                    <button
                      onClick={handleUploadClick}
                      className={style["btn--red"]}
                      id={style.processTask}
                    >
                      Split PDF
                      <i
                        className="fa-sharp fa-regular fa-circle-right"
                        style={{ marginLeft: "15px" }}
                      />
                    </button>
                  </div>
                </div>
              )}


              {/* Mobile phone */}
              {
                sidebar && (
                  <div className={style.mobile__sidebar}>
                    {
                      sidebar && (
                        <div>
                          {fileList && (
                            <div ref={ref} className={style.mobile__sidebar} id={style.mobileSidebar} style={{ overflowY: "auto" }}>
                              <div
                                className={`${style.option__panel} ${style["option__panel--active"]}`}>
                                <div className={style.option__panel__title}>SPLIT PDF</div>


                                {open && <Backdrop
                                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                  open={open}
                                >
                                  <CircularProgress color="inherit" />
                                </Backdrop>}

                                <p className={style.range_mode}>custom mode:</p>

                                <div className={style.page__range}>
                                  <label htmlFor="startPageInput">From Page:</label>
                                  <input
                                    type="number"
                                    id={style.startPageInput}
                                    min={1}
                                    max={pageCount}
                                    value={startPage}
                                    onChange={handleStartPageChange}
                                  />
                                  <label htmlFor="lastPageInput">To Page:</label>
                                  <input
                                    type="number"
                                    id={style.lastPageInput}
                                    min={1}
                                    max={pageCount}
                                    value={endPage}
                                    onChange={handleLastPageChange}
                                  />
                                </div>

                                <button
                                  onClick={handleUploadClick}
                                  className={style["btn--red"]}
                                  id={style.processTask}
                                >
                                  Split PDF
                                  <i
                                    className="fa-sharp fa-regular fa-circle-right"
                                    style={{ marginLeft: "15px" }}
                                  />
                                </button>
                              </div>
                            </div>
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
            <div className={style.footer__copy}>{splitData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default SplitPDF;