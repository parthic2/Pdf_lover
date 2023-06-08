import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineSetting } from "react-icons/ai";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "../../Components/Navbar/Navbar";
import { getRotateApi } from "../../Redux/Action/Pages/RotatePDFAction";
import style from "../Pages.module.css";
import Skeleton from "react-loading-skeleton";

const RotatePDF = () => {

  // For redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rotateData = useSelector((state) => state.rotateReducer.rotateData);

  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Rotate PDF files.";
    dispatch(getRotateApi());
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [rotation, setRotation] = useState(0);

  const rotateRight = () => {
    if (rotation === 270) {
      setRotation(0);
    } else {
      setRotation(rotation + 90);
    }
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
    const fileList = e.target.files;
    const fileArray = Array.from(fileList);
    setFileList(fileArray);
  };

  // Upload File
  const handleUploadClick = async () => {
    if (!fileList) {
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("file", fileList[i]);
    }
    formData.append("degree", rotation);

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    setOpen(true);

    try {
      const url = "https://pdflover.stackholic.io/public/api/rotate-pdf";
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setFileList(data);
      navigate("/Download_Merge_PDF");
    } catch (error) {
      console.log("Error: ", error);
      setOpen(false);
    }
  };

  const files = [...fileList];
  const pageNumber = 1;

  // For Sidebar
  const [sidebar, setSidebar] = useState(false);

  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  if (!rotateData) {
    return null;
  }

  const { title, subTitle, button } = rotateData;

  return (
    <>
      <Navbar />
      {loading ? (
        <div className={style.main}>
          <div className={style.tool}>
            <div className={style.tool__workarea} id="workArea">
              <div className={style.tool__header}>
                <div className={style["skeleton-container"]}>
                  <Box
                    className={style["skeleton-box"]}
                    sx={{
                      width: "30%",
                    }}
                  >
                    <Skeleton height={150} width={150} />
                  </Box>
                  <Box
                    className={style["skeleton-box"]}
                    sx={{
                      width: "60%",
                    }}
                  >
                    <Skeleton height={150} width={150} />
                  </Box>
                  <Box
                    className={style["skeleton-box"]}
                    sx={{
                      width: "20%",
                    }}
                  >
                    <Skeleton height={150} width={150} />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.main} key={rotateData.id}>
          <div className={style.tool}>
            <div className={style.tool__workarea} id="workArea">
              <div className={style.tool__header}>
                <Typography
                  variant="h4"
                  sx={{ textTransform: "capitalize" }}
                  className={style.tool__header__title}>
                  {title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ textTransform: "capitalize" }}
                  className={style.tool__header__subtitle}>
                  {subTitle}
                </Typography>
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
                  <input type="file" multiple onChange={handleFileChange} accept=".pdf" />
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
                          <Page pageNumber={pageNumber} rotate={rotation} />
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
                <div className={style.tool__sidebar} id={style.sidebar} style={{ overflowY: "auto" }}>
                  <div
                    className={`${style.option__panel} ${style["option__panel--active"]}`}>
                    <div className={style.option__panel__title}>ROTATE PDF</div>

                    <div className={style.option__tab}>
                      <div className={style.option__panel__content}>
                        <div className={style.info}>
                          Mouse over PDF file below and a icon will appear, click
                          on it to rotate your PDFs.
                        </div>
                      </div>
                      <p className={style.rotate}>ROTATION</p>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className={style.rotation_text}>{rotation}</div>
                        <div className={style["button-70"]} onClick={rotateRight}>
                          Right
                        </div>

                        {/* <div className={style["button-70"]} onClick={rotateRight}>
                      Right
                    </div> */}
                      </div>
                    </div>
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

                {/* Mobile */}
                {sidebar && (
                  <div className={style.mobile__sidebar}>
                    <div className={style.mobile__sidebar} id={style.mobileSidebar} style={{ overflowY: "auto" }}>
                      <div className={`${style.option__panel} ${style["option__panel--active"]}`}>
                        <div className={style.option__panel__title}>ROTATE PDF</div>

                        <div className={style.option__tab}>
                          <div className={style.option__panel__content}>
                            <div className={style.info}>
                              Mouse over PDF file below and a icon will appear, click
                              on it to rotate your PDFs.
                            </div>
                          </div>
                          <p className={style.rotate}>ROTATION</p>
                          <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className={style.rotation_text}>{rotation}</div>
                            <div className={style["button-70"]} onClick={rotateRight}>
                              Right
                            </div>

                            {/* <div className={style["button-70"]} onClick={rotateRight}>
                                    Right
                                  </div> */}
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
                              Rotate PDF
                              <i
                                className="fa-sharp fa-regular fa-circle-right"
                                style={{ marginLeft: "15px" }}
                              />
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
        <div className={style.footer__copy}>{rotateData.footer}</div>
      </div>
    </>
  );
};

export default RotatePDF;
