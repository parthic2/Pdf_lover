import {  Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getSplitApi } from "../../Redux/Action/Pages/SplitAction";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { AiOutlineSetting } from "react-icons/ai";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import style from "../Pages.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SkeletonLoader from "../../Components/SkeletonLoader/SkeletonLoader";

const SplitPDF = () => {

  // For Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [toggleStateSplit, setToggleStateSplit] = useState(1);
  const [loading, setLoading] = useState(true);

  const pageNumber = 1;

  const files = [...fileList];

  const splitData = useSelector((state) => state.splitReducer.splitData);

  useEffect(() => {
    document.title = "Split PDF files online.";
    dispatch(getSplitApi());
    const delay = 2000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dispatch]);

  // For Sidebar
  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  // For Active tabs
  const handleToggleTab = (index) => {
    setToggleStateSplit(index);
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileList([selectedFile]);
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

    var formData = new FormData();
    formData.append("file", fileList[0]);
    formData.append("range", `${startPage}-${endPage}`);

    var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    setOpen(true);

    try {
      const url = `${process.env.REACT_APP_API_URL}/public/api/split-pdf-merge`;
      const response = await toast.promise(
        fetch(url, requestOptions),
        {
          pending: "Splitting Files...",
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status) {
        setFileList(data);
        navigate("/Download_PDF", {
          state: {
            name: data.data.file,
          },
        });
      } else {
        // Handle the case when the response status is false
        setOpen(false);
        toast.error(`${data.msg}`);
      }
    } catch (error) {
      setOpen(false);
      toast.error("Something Went Wrong!");
    }
  };

  if (!splitData) {
    return null;
  }

  const { title, subTitle, button } = splitData;

  return (
    <>
      <Navbar />

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ padding: "10px" }}
      />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className={style.main} key={splitData.id}>
          <div className={style.tool}>
            <div className={style.tool__workarea} id="workArea">
              <div className={style.tool__header}>
                <h4
                  className={style.tool__header__title}>
                  {title}
                </h4>
                <p
                  className={style.tool__header__subtitle}>
                  {subTitle}
                </p>
              </div>

              {/* Toggle button */}
              <div className={style.side_btn}>
                <button className={style.toggle__btn} onClick={toggleCart}>
                  <AiOutlineSetting />
                </button>
              </div>

              {/* Select file button */}
              <div id="uploader" className={style.uploader}>
                <Button variant="contained" component="label" id={style.pickFiles} title={button}>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf"
                  />
                  <span>{button}</span>
                </Button>
              </div>

              {/* For view Pdf */}
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

            {/* Sidebar */}
            {fileList.length >= 1 && (
              <>
                {/* Desktop */}
                <div className={style.tool__sidebar} id={style.sidebar}>
                  <div
                    className={`${style.option__panel} ${style["option__panel--active"]}`}>
                    <div className={style.option__panel__title}>SPLIT PDF</div>

                    <div className={style.option__tab}>
                      <div className={style["bloc-tabs"]}>
                        <button
                          className={toggleStateSplit === 1 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                          onClick={() => handleToggleTab(1)}
                        >
                          <div>
                            <img src="/image/SplitRange.svg" alt="Split by Range" style={{ marginBottom: "5px" }} />
                          </div>
                          Split by Range
                        </button>
                        <button
                          className={toggleStateSplit === 2 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                          onClick={() => handleToggleTab(2)}
                        >
                          <div>
                            <img src="/image/ExtractPage.svg" alt="Extract Pages" style={{ marginBottom: "5px" }} />
                          </div>
                          Extract Pages
                        </button>
                      </div>

                      <div className={style["content-tabs"]}>
                        <div
                          className={toggleStateSplit === 1 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
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

                          {/* <div className={style.line}/>
                          <div className={style.range__panel}>
                            <button className={style.btn__range}>Add Range</button>
                          </div> */}
                        </div>

                        <div
                          className={toggleStateSplit === 2 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
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
                    </button>
                  </div>
                </div>

                {/* Mobile */}
                {sidebar && (
                  <div className={style.mobile__sidebar}>
                    <div id={style.mobileSidebar}>
                      <div className={`${style.option__panel} ${style["option__panel--active"]}`}>
                        <div className={style.option__panel__title}>SPLIT PDF</div>

                        <div className={style.option__tab}>
                          <div className={style["bloc-tabs"]}>
                            <button
                              className={toggleStateSplit === 1 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                              onClick={() => handleToggleTab(1)}
                            >
                              <div>
                                <img src="/image/SplitRange.svg" alt="Split by Range" style={{ marginBottom: "5px" }} />
                              </div>
                              Split by Range
                            </button>
                            <button
                              className={toggleStateSplit === 2 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                              onClick={() => handleToggleTab(2)}
                            >
                              <div>
                                <img src="/image/ExtractPage.svg" alt="Extract Pages" style={{ marginBottom: "5px" }} />
                              </div>
                              Extract Pages
                            </button>
                          </div>

                          <div className={style["content-tabs"]}>
                            <div
                              className={toggleStateSplit === 1 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
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

                              {/* <div className={style.range__panel}>
                                <button className={style.btn__range}>Add Range</button>
                              </div> */}
                            </div>

                            <div
                              className={toggleStateSplit === 2 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
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

                        {fileList.length >= 1 && (
                          <>
                            {open && (
                              <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
                                <CircularProgress color="inherit" />
                              </Backdrop>
                            )}

                            <button
                              onClick={handleUploadClick}
                              className={style["btn--red"]}
                              id={style.processTask}
                            >
                              Split PDF
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer  */}
      <div className={style.footer}>
        <div className={style.footer__copy}>{splitData.footer}</div>
      </div>
    </>
  );
};

export default SplitPDF;