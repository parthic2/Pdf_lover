import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getAddWatermarkApi } from "../../Redux/Action/Pages/AddWaterMarkAction";
import WatermarkText from "../WatermarkText/WatermarkText";
import WatermarkImages from "../WatermarkImage/WatermarkImages";

import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress'

import style from "../Pages.module.css";
import '../Tabs.css';

const AddWaterMark = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Add watermark to a PDF files.";
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const watermarkData = useSelector(
    (state) => state.addWatermarkReducer.watermarkData
  );
  // console.log(watermarkData);

  useEffect(() => {
    dispatch(getAddWatermarkApi());
  }, [dispatch]);


  // For AddWatermark
  const [isOpen, setIsOpen] = useState(false);

  // For Text
  const [text, setText] = useState("pdfLover");
  const changeText = (e) => {
    setText(e);
  }

  // For font-family
  const [currentFont, setCurrentFont] = useState("Lohit marathi");
  const changeFont = (newFont) => {
    setCurrentFont(newFont);
  }

  // For FontStyle
  const [textStyle, setTextStyle] = useState("Bold");
  const handleStyle = (newStyle) => {
    setTextStyle(newStyle);
  }

  // For Fontsize
  const [fontSize, setFontSize] = useState(10);

  let incrementFontSize = () => {
    if (fontSize < 100) {
      setFontSize(fontSize + 1);
    }
  };

  let decrementFontSize = () => {
    if (fontSize > 0) {
      setFontSize(fontSize - 1);
    }
  }

  // For transparency
  const [transparency, setTransparency] = useState("100");

  const changeTransparency = (e) => {
    setTransparency(e);
  }

  // For mosaic
  const [mosaic, setMosaic] = useState(false);

  // For Font color
  const [color, setColor] = useState("#000000");

  // For Rotation
  const [rotation, setRotation] = useState(0);

  const changeRotation = () => {
    if (rotation === 360) {
      setRotation(0);
    } else {
      setRotation(rotation + 90);
    }
  }

  // Font Position
  const [verticalPos, setVerticalPos] = useState("bottom");
  const changeVerPosition = (newPos) => {
    setVerticalPos(newPos);
  }

  const [horizontalPos, setHorizontalPos] = useState("right");
  const changeHorPosition = (newPos) => {
    setHorizontalPos(newPos);
  }

  // For Active tabs
  const [toggleState, setToggleState] = useState(1);

  const handleToggleTab = (index) => {
    setToggleState(index);
    // console.log(index);
  }


  // For Loading data
  const [open, setOpen] = useState(false);

  // For Upload Files

  const [fileList, setFileList] = useState(0);
  const [imgData, setImgData] = useState("");

  const handleFileChange = (e) => {
    setFileList(e.target.files);
  };

  const handleImage = (e) => {
    // console.log(e.target.files);
    setImgData(e.target.files[0]);
  }

  // Text API
  async function watermarkText() {
    if (!fileList) {
      return;
      // console.log("error");
    }

    // 👇 Create new FormData object and append files
    var formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("file", fileList[i]);
    }
    formData.append("mode", "text");
    formData.append("text", text);
    formData.append("pages", "all");
    formData.append("vertical_position", verticalPos);
    formData.append("horizontal_position", horizontalPos);
    formData.append("mosaic", mosaic);
    formData.append("rotation", rotation);
    formData.append("font_family", currentFont);
    formData.append("font_style", textStyle); // not complete
    formData.append("font_size", fontSize);
    formData.append("font_color", color);
    formData.append("transparency", transparency);

    var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    setOpen(true);

    // 👇 Uploading the files using the fetch API to the server
    try {
      const url = "https://pdflover.stackholic.io/public/api/watermark-pdf";
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setFileList(data);
      // console.log(data);
      // navigate("/");
    } catch (error) {
      // DOMException: The user aborted a request.
      console.log("Error: ", error);
      setOpen(false);
    }
  }

  async function watermarkImage() {
    // Image API
    var formImageData = new FormData();
    formImageData.append("file", fileList[0]);
    formImageData.append("image", imgData);

    var requestImageOptions = {
      method: 'POST',
      body: formImageData,
      redirect: 'follow'
    };

    // 👇 Uploading the files using the fetch API to the server
    try {
      const url = "https://pdflover.stackholic.io/public/api/watermark-pdf-image";
      const response = await fetch(url, requestImageOptions);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setFileList(data);
      // console.log(data);
      // navigate("/");
    } catch (error) {
      // DOMException: The user aborted a request.
      console.log("Error: ", error);
      setOpen(false);
    }
  }

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  const files = fileList ? [...fileList] : [];

  return (
    <>
      <Navbar />

      {watermarkData && (
        <>
          <div className={style.main}>
            <div className={style.tool}>
              <div className={style.tool__workarea} id="workArea">
                <div className={style.tool__header}>
                  <Typography
                    variant="h4"
                    className={style.tool__header__title}>
                    {watermarkData.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={style.tool__header__subtitle}>
                    {watermarkData.subTitle}
                  </Typography>
                </div>

                {/* Uploader button */}
                <div id="uploader" className={style.uploader}>
                  <Button
                    variant="contained"
                    component="label"
                    id={style.pickFiles}
                    title={watermarkData.button}>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                    <span>{watermarkData.button}</span>
                  </Button>

                  <ul>
                    {files.map((file, i) => (
                      <div key={i}>
                        <li>
                          {file.name} - {file.type}
                        </li>
                      </div>
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
                      <div className={style.option__panel__title}>WATERMARK OPTIONS</div>

                      <div className={style.option__tab}>
                        <div className="bloc-tabs">
                          <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => handleToggleTab(1)}
                          >
                            <div>
                              <FormatColorTextIcon />
                            </div>
                            Place text
                          </button>
                          <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => handleToggleTab(2)}
                          >
                            <div>
                              <AddPhotoAlternateIcon />
                            </div>
                            Place Image
                          </button>
                        </div>

                        <div className="content-tabs">
                          <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                          >
                            <WatermarkText
                              isOpen={isOpen}
                              setIsOpen={setIsOpen}
                              text={text}
                              changeText={changeText}
                              currentFont={currentFont}
                              changeFont={changeFont}
                              fontSize={fontSize}
                              setFontSize={setFontSize}
                              incrementFontSize={incrementFontSize}
                              decrementFontSize={decrementFontSize}
                              transparency={transparency}
                              changeTransparency={changeTransparency}
                              textStyle={textStyle}
                              handleStyle={handleStyle}
                              mosaic={mosaic}
                              setMosaic={setMosaic}
                              rotation={rotation}
                              setColor={setColor}
                              changeRotation={changeRotation}
                              verticalPos={verticalPos}
                              changeVerPosition={changeVerPosition}
                              horizontalPos={horizontalPos}
                              changeHorPosition={changeHorPosition}
                            />
                          </div>

                          <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                          >
                            <WatermarkImages
                              imgData={imgData}
                              handleImage={handleImage}
                            />
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
                      onClick={() => {
                        watermarkText();
                        watermarkImage();
                      }}
                      className={style["btn--red"]}
                      id={style.processTask}
                    >
                      Add WaterMark
                      <i
                        className="fa-sharp fa-regular fa-circle-right"
                        style={{ marginLeft: "15px" }} />
                    </button>
                  </div>
                </>
              )}

            </div>
          </div>

          {/* Footer  */}
          <div className={style.footer}>
            <div className={style.footer__copy}>{watermarkData.footer}</div>
          </div>
        </>
      )
      }
    </>
  );
};

export default AddWaterMark;