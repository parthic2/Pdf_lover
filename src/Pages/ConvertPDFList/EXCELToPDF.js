import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineSetting } from "react-icons/ai";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "../../Components/Navbar/Navbar";
import { getExcelToPDFApi } from "../../Redux/Action/Pages/EXCELToPDFAction";
import Skeleton from "react-loading-skeleton";
import style from "../Pages.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EXCELToPDF = () => {

  // For redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [sidebar, setSidebar] = useState(false);

  const files = [...fileList];

  const EtoPData = useSelector((state) => state.EXCELtoPDFReducer.EtoPData);

  useEffect(() => {
    document.title = "Convert EXCEL to PDF.";
    dispatch(getExcelToPDFApi());
    const delay = 2000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dispatch]);

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

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    setOpen(true);

    try {
      const url = "https://pdflover.stackholic.io/public/api/office-to-pdf";
      const response = await toast.promise(
        fetch(url, requestOptions), {
        pending: "Converting EXCEl to PDF File..."
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status) {
        setFileList(data);
        navigate("/Download_Merge_PDF");
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

  // For Sidebar
  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  if (!EtoPData) {
    return null;
  }

  const { title, subTitle, button } = EtoPData;

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
      />

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
        <div className={style.main} key={EtoPData.id}>
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
                <Button
                  variant="contained"
                  component="label"
                  id={style.pickFiles}
                  title={button}>
                  <input
                    type="file"
                    multiple
                    accept=".xls, .xlsx, .doc, .docx, .ppt, .pptx, .odt, .odp, .ods"
                    onChange={handleFileChange}
                  />
                  <span>{button}</span>
                </Button>
              </div>

              {/* For view Excel */}
              <div className={style.tool__workarea__display}>
                {files.map((file, i) => (
                  <div className={style.tool__workarea__rendered} key={i}>
                    <div className={style.file}>
                      <img src="image/Excel.svg" alt="svg" />

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
                    <div className={style.option__panel__title}>
                      EXCEL TO PDF
                    </div>

                    <div className={style.option__panel__content}>
                      <div className={style.info}>
                        Please, select EXCEL files by clicking on
                        ’Select EXCEL Files’.
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
                    Convert to PDF
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
                        <div className={style.option__panel__title}>
                          EXCEL TO PDF
                        </div>

                        <div className={style.option__panel__content}>
                          <div className={style.info}>
                            Please, select EXCEL files by clicking on
                            ’Select EXCEL Files’.
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
                              Convert to PDF
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
        <div className={style.footer__copy}>{EtoPData.footer}</div>
      </div>
    </>
  );
};

export default EXCELToPDF;
