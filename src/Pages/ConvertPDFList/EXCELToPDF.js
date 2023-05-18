import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { getExcelToPDFApi } from "../../Redux/Action/Pages/EXCELToPDFAction";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import style from "../Pages.module.css";

const EXCELToPDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Convert EXCEL to PDF.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const EtoPData = useSelector((state) => state.EXCELtoPDFReducer.EtoPData);
  // console.log(EtoPData);

  useEffect(() => {
    dispatch(getExcelToPDFApi());
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
      const url = "https://pdflover.stackholic.io/public/api/office-to-pdf";
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

  return (
    <>
      <Navbar />

      {EtoPData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {EtoPData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {EtoPData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    component="label"
                    id={style.pickFiles}
                    title={EtoPData.button}>
                    <input
                      type="file"
                      multiple
                      // .doc, .docx, .ppt, .pptx, .odt, .odp, .ods
                      accept=".xls, .xlsx"
                      onChange={handleFileChange}
                    />
                    <span>{EtoPData.button}</span>
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
                    <div className={style.option__panel__title}>
                      EXCEL TO PDF
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
              )}
            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{EtoPData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default EXCELToPDF;
