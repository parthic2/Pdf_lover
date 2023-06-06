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
import '../Tabs.css';

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

  // For Active tabs
  const [toggleStateSplit, setToggleStateSplit] = useState(1);

  const handleToggleTab = (index) => {
    setToggleStateSplit(index);
    // console.log(index);
  }

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
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                    <span>{splitData.button}</span>
                  </Button>
                </div>

                <div className={style.tool__workarea__rendered}>
                  <div className={style.file}>
                    <div className={style.file__canvas}>

                    </div>
                  </div>
                </div>
              </div>

              {/* sidebar  */}
              {fileList && (
                <div className={style.tool__sidebar} id="sidebar" style={{ overflowY: "auto" }}>
                  <div
                    className={`${style.option__panel} ${style["option__panel--active"]}`}>
                    <div className={style.option__panel__title}>SPLIT PDF</div>

                    <div className={style.option__tab}>
                      <div className="bloc-tabs">
                        <button
                          className={toggleStateSplit === 1 ? "tabs active-tabs" : "tabs"}
                          onClick={() => handleToggleTab(1)}
                        >
                          <div>
                            <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            >
                              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-707.000000, -294.000000)"
                                  fillRule="nonzero">
                                  <g transform="translate(707.000000, 294.000000)">
                                    <rect id="Rectangle" fill="#000000" x="0" y="46" width="9" height="2"></rect>
                                    <rect id="Rectangle-Copy-5" fill="#000000" x="13" y="46" width="9" height="2"></rect>
                                    <rect id="Rectangle-Copy-6" fill="#000000" x="26" y="46" width="9" height="2"></rect>
                                    <rect id="Rectangle-Copy-7" fill="#000000" x="39" y="46" width="9" height="2"></rect>
                                    <path
                                      d="M40.6626536,14.4 L31.4,14.4 L31.4,32.6 L44.1102041,32.6 L44.1102041,17.7963194 L40.6626536,14.4 Z M40.6626536,12 C41.2929501,12 41.8979484,12.2479497 42.346959,12.690288 L46.5102041,16.7916667 L46.5102041,32.6 C46.5102041,33.9254834 45.4356875,35 44.1102041,35 L31.4,35 C30.0745166,35 29,33.9254834 29,32.6 L29,14.4 C29,13.0745166 30.0745166,12 31.4,12 L40.6626536,12 Z M45.1882086,17.4722222 C45.5463797,17.4722222 45.8367347,17.7582625 45.8367347,18.1111111 C45.8367347,18.4639597 45.5463797,18.75 45.1882086,18.75 L40.6485261,18.75 C40.290355,18.75 40,18.4639597 40,18.1111111 L40,13.6388889 C40,13.2860403 40.290355,13 40.6485261,13 C41.0066971,13 41.2970522,13.2860403 41.2970522,13.6388889 L45.1882086,17.4722222 Z"
                                      id="Rectangle-8" fill="#161616"></path>
                                    <path
                                      d="M11.6626536,14.4 L2.4,14.4 L2.4,32.6 L15.1102041,32.6 L15.1102041,17.7963194 L11.6626536,14.4 Z M11.6626536,12 C12.2929501,12 12.8979484,12.2479497 13.346959,12.690288 L17.5102041,16.7916667 L17.5102041,32.6 C17.5102041,33.9254834 16.4356875,35 15.1102041,35 L2.4,35 C1.0745166,35 5.68434189e-13,33.9254834 5.68434189e-13,32.6 L0,14.4 C0,13.0745166 1.0745166,12 2.4,12 L11.6626536,12 Z M16.1882086,17.4722222 C16.5463797,17.4722222 16.8367347,17.7582625 16.8367347,18.1111111 C16.8367347,18.4639597 16.5463797,18.75 16.1882086,18.75 L11.6485261,18.75 C11.290355,18.75 11,18.4639597 11,18.1111111 L11,13.6388889 C11,13.2860403 11.290355,13 11.6485261,13 C12.0066971,13 12.2970522,13.2860403 12.2970522,13.6388889 L16.1882086,17.4722222 Z"
                                      id="Rectangle-8-Copy-2" fill="#161616"></path>
                                    <rect id="Rectangle-12" fill="#000000" x="46" y="43" width="2" height="5"></rect>
                                    <rect id="Rectangle-12-Copy" fill="#000000" x="0" y="43" width="2" height="5"></rect>
                                    <path
                                      d="M21.5,25 C20.6715729,25 20,24.3284271 20,23.5 C20,22.6715729 20.6715729,22 21.5,22 L25.5,22 C26.3284271,22 27,22.6715729 27,23.5 C27,24.3284271 26.3284271,25 25.5,25 L21.5,25 Z"
                                      id="Line" fill="#161616"></path>
                                    <polygon id="Rectangle-Copy-8" fill="#000000" points="0 2 0 0 9 0 9 2"></polygon>
                                    <polygon id="Rectangle-Copy-9" fill="#000000" points="13 2 13 0 22 0 22 2"></polygon>
                                    <polygon id="Rectangle-Copy-10" fill="#000000" points="26 2 26 0 35 0 35 2"></polygon>
                                    <polygon id="Rectangle-Copy-11" fill="#000000" points="39 2 39 0 48 0 48 2"></polygon>
                                    <polygon id="Rectangle-12-Copy-8" fill="#000000" points="46 5 46 0 48 0 48 5"></polygon>
                                    <polygon id="Rectangle-12-Copy-9" fill="#000000" points="0 5 0 0 2 0 2 5"></polygon>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          Split by Range
                        </button>
                        <button
                          className={toggleStateSplit === 2 ? "tabs active-tabs" : "tabs"}
                          onClick={() => handleToggleTab(2)}
                        >
                          <div>
                            <svg width="47px" height="48px" viewBox="0 0 47 48" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            >
                              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-1309.000000, -194.000000)" fill="#969696" fillRule="nonzero">
                                  <g transform="translate(1309.000000, 194.000000)">
                                    <path d="M37,2 L37,10 L45,10 L45,2 L37,2 Z M36,0 L46,0 C46.5522847,0 47,0.44771525 47,1 L47,11 C47,11.5522847 46.5522847,12 46,12 L36,12 C35.4477153,12 35,11.5522847 35,11 L35,1 C35,0.44771525 35.4477153,0 36,0 Z"
                                      id="Rectangle-17"></path>
                                    <path d="M37,20 L37,28 L45,28 L45,20 L37,20 Z M36,18 L46,18 C46.5522847,18 47,18.4477153 47,19 L47,29 C47,29.5522847 46.5522847,30 46,30 L36,30 C35.4477153,30 35,29.5522847 35,29 L35,19 C35,18.4477153 35.4477153,18 36,18 Z"
                                      id="Rectangle-17-Copy"></path>
                                    <path d="M37,38 L37,46 L45,46 L45,38 L37,38 Z M36,36 L46,36 C46.5522847,36 47,36.4477153 47,37 L47,47 C47,47.5522847 46.5522847,48 46,48 L36,48 C35.4477153,48 35,47.5522847 35,47 L35,37 C35,36.4477153 35.4477153,36 36,36 Z"
                                      id="Rectangle-17-Copy-2"></path>
                                    <path d="M26,42 L31,42 C31.5522847,42 32,42.4477153 32,43 C32,43.5522847 31.5522847,44 31,44 L24,44 L24,4 L31,4 C31.5522847,4 32,4.44771525 32,5 C32,5.55228475 31.5522847,6 31,6 L26,6 L26,23 L31,23 C31.5522847,23 32,23.4477153 32,24 C32,24.5522847 31.5522847,25 31,25 L26,25 L26,42 Z"
                                      id="Combined-Shape"></path>
                                    <path d="M11.6626536,12.4 L2.4,12.4 L2.4,30.6 L15.1102041,30.6 L15.1102041,15.7963194 L11.6626536,12.4 Z M11.6626536,10 C12.2929501,10 12.8979484,10.2479497 13.346959,10.690288 L17.5102041,14.7916667 L17.5102041,30.6 C17.5102041,31.9254834 16.4356875,33 15.1102041,33 L2.4,33 C1.0745166,33 5.68434189e-13,31.9254834 5.68434189e-13,30.6 L0,12.4 C0,11.0745166 1.0745166,10 2.4,10 L11.6626536,10 Z M16.1882086,15.4722222 C16.5463797,15.4722222 16.8367347,15.7582625 16.8367347,16.1111111 C16.8367347,16.4639597 16.5463797,16.75 16.1882086,16.75 L11.6485261,16.75 C11.290355,16.75 11,16.4639597 11,16.1111111 L11,11.6388889 C11,11.2860403 11.290355,11 11.6485261,11 C12.0066971,11 12.2970522,11.2860403 12.2970522,11.6388889 L16.1882086,15.4722222 Z"
                                      id="Rectangle-8-Copy"></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          Extract Pages
                        </button>
                      </div>

                      <div className="content-tabs">
                        <div
                          className={toggleStateSplit === 1 ? "content active-content" : "content"}
                        >
                          <p className={style.range_mode}>custom ranges:</p>

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
                        </div>

                        <div
                          className={toggleStateSplit === 2 ? "content  active-content" : "content"}
                        >
                          <p className={style.range_mode}>extract mode:</p>

                          <div className={style.option__panel__content}>
                            <div className={style.info}>
                              Every selected page of this PDF file will be converted in one separated PDF file.
                              <br /><b>{endPage} PDF</b> will be created.
                            </div>
                          </div>
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

                                <div className={style.option__tab}>
                                  <div className="bloc-tabs">
                                    <button
                                      className={toggleStateSplit === 1 ? "tabs active-tabs" : "tabs"}
                                      onClick={() => handleToggleTab(1)}
                                    >
                                      <div>
                                        <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g transform="translate(-707.000000, -294.000000)"
                                              fillRule="nonzero">
                                              <g transform="translate(707.000000, 294.000000)">
                                                <rect id="Rectangle" fill="#000000" x="0" y="46" width="9" height="2"></rect>
                                                <rect id="Rectangle-Copy-5" fill="#000000" x="13" y="46" width="9" height="2"></rect>
                                                <rect id="Rectangle-Copy-6" fill="#000000" x="26" y="46" width="9" height="2"></rect>
                                                <rect id="Rectangle-Copy-7" fill="#000000" x="39" y="46" width="9" height="2"></rect>
                                                <path
                                                  d="M40.6626536,14.4 L31.4,14.4 L31.4,32.6 L44.1102041,32.6 L44.1102041,17.7963194 L40.6626536,14.4 Z M40.6626536,12 C41.2929501,12 41.8979484,12.2479497 42.346959,12.690288 L46.5102041,16.7916667 L46.5102041,32.6 C46.5102041,33.9254834 45.4356875,35 44.1102041,35 L31.4,35 C30.0745166,35 29,33.9254834 29,32.6 L29,14.4 C29,13.0745166 30.0745166,12 31.4,12 L40.6626536,12 Z M45.1882086,17.4722222 C45.5463797,17.4722222 45.8367347,17.7582625 45.8367347,18.1111111 C45.8367347,18.4639597 45.5463797,18.75 45.1882086,18.75 L40.6485261,18.75 C40.290355,18.75 40,18.4639597 40,18.1111111 L40,13.6388889 C40,13.2860403 40.290355,13 40.6485261,13 C41.0066971,13 41.2970522,13.2860403 41.2970522,13.6388889 L45.1882086,17.4722222 Z"
                                                  id="Rectangle-8" fill="#161616"></path>
                                                <path
                                                  d="M11.6626536,14.4 L2.4,14.4 L2.4,32.6 L15.1102041,32.6 L15.1102041,17.7963194 L11.6626536,14.4 Z M11.6626536,12 C12.2929501,12 12.8979484,12.2479497 13.346959,12.690288 L17.5102041,16.7916667 L17.5102041,32.6 C17.5102041,33.9254834 16.4356875,35 15.1102041,35 L2.4,35 C1.0745166,35 5.68434189e-13,33.9254834 5.68434189e-13,32.6 L0,14.4 C0,13.0745166 1.0745166,12 2.4,12 L11.6626536,12 Z M16.1882086,17.4722222 C16.5463797,17.4722222 16.8367347,17.7582625 16.8367347,18.1111111 C16.8367347,18.4639597 16.5463797,18.75 16.1882086,18.75 L11.6485261,18.75 C11.290355,18.75 11,18.4639597 11,18.1111111 L11,13.6388889 C11,13.2860403 11.290355,13 11.6485261,13 C12.0066971,13 12.2970522,13.2860403 12.2970522,13.6388889 L16.1882086,17.4722222 Z"
                                                  id="Rectangle-8-Copy-2" fill="#161616"></path>
                                                <rect id="Rectangle-12" fill="#000000" x="46" y="43" width="2" height="5"></rect>
                                                <rect id="Rectangle-12-Copy" fill="#000000" x="0" y="43" width="2" height="5"></rect>
                                                <path
                                                  d="M21.5,25 C20.6715729,25 20,24.3284271 20,23.5 C20,22.6715729 20.6715729,22 21.5,22 L25.5,22 C26.3284271,22 27,22.6715729 27,23.5 C27,24.3284271 26.3284271,25 25.5,25 L21.5,25 Z"
                                                  id="Line" fill="#161616"></path>
                                                <polygon id="Rectangle-Copy-8" fill="#000000" points="0 2 0 0 9 0 9 2"></polygon>
                                                <polygon id="Rectangle-Copy-9" fill="#000000" points="13 2 13 0 22 0 22 2"></polygon>
                                                <polygon id="Rectangle-Copy-10" fill="#000000" points="26 2 26 0 35 0 35 2"></polygon>
                                                <polygon id="Rectangle-Copy-11" fill="#000000" points="39 2 39 0 48 0 48 2"></polygon>
                                                <polygon id="Rectangle-12-Copy-8" fill="#000000" points="46 5 46 0 48 0 48 5"></polygon>
                                                <polygon id="Rectangle-12-Copy-9" fill="#000000" points="0 5 0 0 2 0 2 5"></polygon>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                      Split by Range
                                    </button>
                                    <button
                                      className={toggleStateSplit === 2 ? "tabs active-tabs" : "tabs"}
                                      onClick={() => handleToggleTab(2)}
                                    >
                                      <div>
                                        <svg width="47px" height="48px" viewBox="0 0 47 48" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g transform="translate(-1309.000000, -194.000000)" fill="#969696" fillRule="nonzero">
                                              <g transform="translate(1309.000000, 194.000000)">
                                                <path d="M37,2 L37,10 L45,10 L45,2 L37,2 Z M36,0 L46,0 C46.5522847,0 47,0.44771525 47,1 L47,11 C47,11.5522847 46.5522847,12 46,12 L36,12 C35.4477153,12 35,11.5522847 35,11 L35,1 C35,0.44771525 35.4477153,0 36,0 Z"
                                                  id="Rectangle-17"></path>
                                                <path d="M37,20 L37,28 L45,28 L45,20 L37,20 Z M36,18 L46,18 C46.5522847,18 47,18.4477153 47,19 L47,29 C47,29.5522847 46.5522847,30 46,30 L36,30 C35.4477153,30 35,29.5522847 35,29 L35,19 C35,18.4477153 35.4477153,18 36,18 Z"
                                                  id="Rectangle-17-Copy"></path>
                                                <path d="M37,38 L37,46 L45,46 L45,38 L37,38 Z M36,36 L46,36 C46.5522847,36 47,36.4477153 47,37 L47,47 C47,47.5522847 46.5522847,48 46,48 L36,48 C35.4477153,48 35,47.5522847 35,47 L35,37 C35,36.4477153 35.4477153,36 36,36 Z"
                                                  id="Rectangle-17-Copy-2"></path>
                                                <path d="M26,42 L31,42 C31.5522847,42 32,42.4477153 32,43 C32,43.5522847 31.5522847,44 31,44 L24,44 L24,4 L31,4 C31.5522847,4 32,4.44771525 32,5 C32,5.55228475 31.5522847,6 31,6 L26,6 L26,23 L31,23 C31.5522847,23 32,23.4477153 32,24 C32,24.5522847 31.5522847,25 31,25 L26,25 L26,42 Z"
                                                  id="Combined-Shape"></path>
                                                <path d="M11.6626536,12.4 L2.4,12.4 L2.4,30.6 L15.1102041,30.6 L15.1102041,15.7963194 L11.6626536,12.4 Z M11.6626536,10 C12.2929501,10 12.8979484,10.2479497 13.346959,10.690288 L17.5102041,14.7916667 L17.5102041,30.6 C17.5102041,31.9254834 16.4356875,33 15.1102041,33 L2.4,33 C1.0745166,33 5.68434189e-13,31.9254834 5.68434189e-13,30.6 L0,12.4 C0,11.0745166 1.0745166,10 2.4,10 L11.6626536,10 Z M16.1882086,15.4722222 C16.5463797,15.4722222 16.8367347,15.7582625 16.8367347,16.1111111 C16.8367347,16.4639597 16.5463797,16.75 16.1882086,16.75 L11.6485261,16.75 C11.290355,16.75 11,16.4639597 11,16.1111111 L11,11.6388889 C11,11.2860403 11.290355,11 11.6485261,11 C12.0066971,11 12.2970522,11.2860403 12.2970522,11.6388889 L16.1882086,15.4722222 Z"
                                                  id="Rectangle-8-Copy"></path>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                      Extract Pages
                                    </button>
                                  </div>

                                  <div className="content-tabs">
                                    <div
                                      className={toggleStateSplit === 1 ? "content active-content" : "content"}
                                    >
                                      <p className={style.range_mode}>custom ranges:</p>

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
                                    </div>

                                    <div
                                      className={toggleStateSplit === 2 ? "content  active-content" : "content"}
                                    >
                                      <p className={style.range_mode}>extract mode:</p>

                                      <div className={style.option__panel__content}>
                                        <div className={style.info}>
                                          Every selected page of this PDF file will be converted in one separated PDF file.
                                          <br /><b>{endPage} PDF</b> will be created.
                                        </div>
                                      </div>
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