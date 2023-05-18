import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getProtectApi } from "../../Redux/Action/Pages/ProtectPDFAction";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import style from "../Pages.module.css";
import { useNavigate } from "react-router-dom";

const ProtectPDF = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Protect PDF files. Tools to encrypt PDF with password";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const protectData = useSelector((state) => state.protectReducer.protectData);
  // console.log(protectData);

  useEffect(() => {
    dispatch(getProtectApi());
  }, [dispatch]);

  // For Password validation
  const [formInput, setFormInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();

    let inputError = {
      password: "",
      confirmPassword: "",
    };

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    setFormError(inputError);
  };

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
    formData.append("password", formInput.password);

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    setOpen(true);

    // 👇 Uploading the files using the fetch API to the server
    try {
      const url = "https://pdflover.stackholic.io/public/api/lock-pdf";
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

      {protectData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {protectData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {protectData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    component="label"
                    id={style.pickFiles}
                    title={protectData.button}>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                    <span>{protectData.button}</span>
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
                      PROTECT PDF
                    </div>

                    <div className={style.option__panel__content}>
                      <div className="card-header">
                        <h4 className={style.option__title}>
                          SET A PASSWORD TO PROTECT YOUR PDF FILE
                        </h4>
                      </div>

                      <div className="card-body">
                        <form onSubmit={validateFormInput}>
                          <p className="label">Password</p>
                          <input
                            value={formInput.password}
                            onChange={({ target }) => {
                              handleUserInput(target.name, target.value);
                            }}
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Password"
                          />
                          <p className="error-message">{formError.password}</p>

                          <p className="label">Confirm Password</p>
                          <input
                            value={formInput.confirmPassword}
                            onChange={({ target }) => {
                              handleUserInput(target.name, target.value);
                            }}
                            name="confirmPassword"
                            type="password"
                            className="input"
                            placeholder="Confirm Password"
                          />
                          <p className="error-message">
                            {formError.confirmPassword}
                          </p>

                          {/* <button type="submit" className="btn" value="Submit">
                            submit
                          </button> */}
                        </form>
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
                    Protect PDF
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
            <div className={style.footer__copy}>{protectData.footer}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProtectPDF;
