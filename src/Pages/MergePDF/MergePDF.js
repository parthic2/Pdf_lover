import { Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { getMergeApi } from "../../Redux/Action/Pages/MergeAction";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { AiOutlineSetting } from 'react-icons/ai';

import style from "../Pages.module.css";

const MergePDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Merge PDF files online.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const mergeData = useSelector((state) => state.mergeReducer.mergeData);
  // console.log(mergeData);

  useEffect(() => {
    dispatch(getMergeApi());
  }, [dispatch]);

  // For Loading data
  const [open, setOpen] = useState(false);

  // For Upload file
  const navigate = useNavigate();

  const [fileList, setFileList] = useState(0);

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
      formData.append("files[]", fileList[i]);
    }

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    setOpen(true);

    // 👇 Uploading the files using the fetch API to the server
    try {
      const url = "https://pdflover.stackholic.io/public/api/merge";
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
      {mergeData && (
        <>
          <div className={style.main} key={mergeData.id}>
            <div className={style.tool}>
              {/* workarea */}
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__title}>
                    {mergeData.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "capitalize" }}
                    className={style.tool__header__subtitle}>
                    {mergeData.subTitle}
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
                    title={mergeData.button}>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                    <span>{mergeData.button}</span>
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
                <>
                  <div className={style.tool__sidebar} id="sidebar" style={{ overflowY: "auto" }}>
                    <div
                      className={`${style.option__panel} ${style["option__panel--active"]}`}>
                      <div className={style.option__panel__title}>Merge pdf</div>

                      <div className={style.option__panel__content}>
                        <div className={style.info}>
                          Please, select more PDF files by clicking again on
                          ’Select PDF files’. <br />
                          Select multiple files by maintaining pressed ’Ctrl’
                        </div>
                      </div>


                      {fileList.length >= 2 ? (
                        <>
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
                            Merge PDF
                            <i
                              className="fa-sharp fa-regular fa-circle-right"
                              style={{ marginLeft: "15px" }}
                            />
                          </button>
                        </>
                      ) : (
                        <>
                          <div className={style.alert__text}>
                            <p>Please add one more file to activate options</p>
                          </div>
                          <button
                            onClick={handleUploadClick}
                            className={style["btn--grey"]}
                            disabled
                            id={style.processTask}
                          >
                            Merge PDF
                            <i
                              className="fa-sharp fa-regular fa-circle-right"
                              style={{ marginLeft: "15px" }}
                            />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </>
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
                                  <div className={style.option__panel__title}>Merge pdf</div>

                                  <div className={style.option__panel__content}>
                                    <div className={style.info}>
                                      Please, select more PDF files by clicking again on
                                      ’Select PDF files’. <br />
                                      Select multiple files by maintaining pressed ’Ctrl’
                                    </div>
                                  </div>

                                  {fileList.length >= 2 ? (
                                    <>
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
                                        Merge PDF
                                        <i
                                          className="fa-sharp fa-regular fa-circle-right"
                                          style={{ marginLeft: "15px" }}
                                        />
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <div className={style.alert__text}>
                                        <p>Please add one more file to activate options</p>
                                      </div>
                                      <button
                                        onClick={handleUploadClick}
                                        className={style["btn--grey"]}
                                        disabled
                                        id={style.processTask}
                                      >
                                        Merge PDF
                                        <i
                                          className="fa-sharp fa-regular fa-circle-right"
                                          style={{ marginLeft: "15px" }}
                                        />
                                      </button>
                                    </>
                                  )}
                                </div>
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
            <div className={style.footer__copy}>{mergeData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default MergePDF;