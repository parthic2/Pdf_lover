import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineSetting } from "react-icons/ai";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "../../Components/Navbar/Navbar";
import { getMergeApi } from "../../Redux/Action/Pages/MergeAction";
import style from "../Pages.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SkeletonLoader from "../../Components/SkeletonLoader/SkeletonLoader";

const MergePDF = () => {

  // For redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  const files = [...fileList];
  const pageNumber = 1;

  const mergeData = useSelector((state) => state.mergeReducer.mergeData);

  useEffect(() => {
    document.title = "Merge PDF files online.";
    dispatch(getMergeApi());
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
    if (!fileList || fileList.length < 2) {
      toast.error("Select pdf file");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("files[]", fileList[i]);
    }

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    setOpen(true);

    try {
      const url = `${process.env.REACT_APP_API_URL}/public/api/merge`;
      const response = await toast.promise(
        fetch(url, requestOptions),
        {
          pending: "Merging Files...",
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
            name: "Merge PDF", // Your custom string
            file: data.data.file, // The value from data.data.file
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

  // For Sidebar
  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  if (!mergeData) {
    return null;
  }

  const { title, subTitle, button } = mergeData;

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
        <div className={style.main} key={mergeData.id}>
          <div className={style.tool}>
            <div className={style.tool__workarea} id="workArea">
              <div className={style.tool__header}>
                <h4 className={style.tool__header__title}>
                  {title}
                </h4>
                <p className={style.tool__header__subtitle}>
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
                  <div className={`${style.option__panel} ${style["option__panel--active"]}`}>
                    <div className={style.option__panel__title}>Merge pdf</div>
                    <div className={style.option__panel__content}>
                      <div className={style.info}>
                        Please, select more PDF files by clicking again on 'Select PDF files'. <br />
                        Select multiple files by maintaining pressed 'Ctrl'
                      </div>
                    </div>
                    {fileList.length >= 2 ? (
                      <>
                        {open && (
                          <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
                            <CircularProgress color="inherit" />
                          </Backdrop>
                        )}
                        <button onClick={handleUploadClick} className={style["btn--red"]} id={style.processTask}>
                          Merge PDF
                        </button>
                      </>
                    ) : (
                      <>
                        <div className={style.alert__text}>
                          <p>Please add one more file to activate options</p>
                        </div>
                        <button onClick={handleUploadClick} className={style["btn--grey"]} disabled id={style.processTask}>
                          Merge PDF
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Mobile */}
                {sidebar && (
                  <div className={style.mobile__sidebar}>
                    <div id={style.mobileSidebar}>
                      <div className={`${style.option__panel} ${style["option__panel--active"]}`}>
                        <div className={style.option__panel__title}>Merge pdf</div>
                        <div className={style.option__panel__content}>
                          <div className={style.info}>
                            Please, select more PDF files by clicking again on 'Select PDF files'. <br />
                            Select multiple files by maintaining pressed 'Ctrl'
                          </div>
                        </div>
                        {fileList.length >= 2 ? (
                          <>
                            {open && (
                              <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
                                <CircularProgress color="inherit" />
                              </Backdrop>
                            )}
                            <button onClick={handleUploadClick} className={style["btn--red"]} id={style.processTask}>
                              Merge PDF
                            </button>
                          </>
                        ) : (
                          <>
                            <div className={style.alert__text}>
                              <p>Please add one more file to activate options</p>
                            </div>
                            <button onClick={handleUploadClick} className={style["btn--grey"]} disabled id={style.processTask}>
                              Merge PDF
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

      {/* Footer */}
      <div className={style.footer}>
        <div className={style.footer__copy}>{mergeData.footer}</div>
      </div>
    </>
  );
};

export default MergePDF;