import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { getAddWatermarkApi } from "../../Redux/Action/Pages/AddWaterMarkAction";
import WatermarkText from "../WatermarkText/WatermarkText";
import WatermarkImages from "../WatermarkImage/WatermarkImages";
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { AiOutlineSetting } from 'react-icons/ai';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useNavigate } from "react-router-dom";
import style from "../Pages.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SkeletonLoader from "../../Components/SkeletonLoader/SkeletonLoader";

const AddWaterMark = () => {

  // For Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("PDFLover");
  const [currentFont, setCurrentFont] = useState("Lohit marathi");
  const [textStyle, setTextStyle] = useState("Bold");
  const [fontSize, setFontSize] = useState(10);
  const [transparency, setTransparency] = useState("100");
  const [mosaic, setMosaic] = useState(false);
  const [color, setColor] = useState("");
  const [rotation, setRotation] = useState(0);
  const [verticalPos, setVerticalPos] = useState("bottom");
  const [horizontalPos, setHorizontalPos] = useState("right");
  const [toggleStateWater, setToggleStateWater] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [imgData, setImgData] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(true);

  const pageNumber = 1;
  const files = [...fileList];

  const watermarkData = useSelector(
    (state) => state.addWatermarkReducer.watermarkData
  );

  useEffect(() => {
    document.title = "Add watermark to a PDF files.";
    dispatch(getAddWatermarkApi());
    const delay = 2000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dispatch]);

  // For Text
  const changeText = (e) => {
    setText(e);
  }

  // For font-family
  const changeFont = (newFont) => {
    setCurrentFont(newFont);
  }

  // For FontStyle
  const handleStyle = (newStyle) => {
    setTextStyle(newStyle);
  }

  // For Font size
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
  const changeTransparency = (e) => {
    setTransparency(e);
  }

  // For Rotation
  const changeRotation = () => {
    setRotation((rotation + 90) % 360);
  }

  // Font Position
  const changeVerPosition = (newPos) => {
    setVerticalPos(newPos);
  }

  const changeHorPosition = (newPos) => {
    setHorizontalPos(newPos);
  }

  // For Active tabs
  const handleToggleTab = (index) => {
    setToggleStateWater(index);
  }

  // For Page Range
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

  // Handle file change
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

  // Handle image
  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImgData(e.target.files[0]);
    }
  }

  // WaterMark API
  async function handleButtonClick() {
    setOpen(true);

    let responseText;
    let responseImage;

    // Text API
    try {
      if (!fileList) {
        return;
      }

      const formData = new FormData();
      formData.append("file", fileList[0]);
      formData.append("mode", "text");
      formData.append("text", text);
      formData.append("pages", `${startPage}-${endPage}`);
      formData.append("vertical_position", verticalPos);
      formData.append("horizontal_position", horizontalPos);
      formData.append("mosaic", mosaic);
      formData.append("rotation", rotation);
      formData.append("font_family", currentFont);
      formData.append("font_style", textStyle);
      formData.append("font_size", fontSize);
      formData.append("font_color", color);
      formData.append("transparency", transparency);

      var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
      };

      const url = `${process.env.REACT_APP_API_URL}/public/api/watermark-pdf`;
      responseText = await toast.promise(
        fetch(url, requestOptions), {
        pending: "Adding Watermark (Text) Files...",
      });

      if (!responseText.ok) {
        throw new Error(`Error! status: ${responseText.status}`);
      }

      const data = await responseText.json();

      if (data.status) {
        setFileList(data);
        navigate("/Download_PDF", {
          state: {
            name: "Watermark PDF", // Your custom string
            file: data.data.file, // The value from data.data.file
          },
        });
      } else {
        setOpen(false);
        toast.error(`${data.msg} (Text)`);
      }
    } catch (error) {
      setOpen(false);
      toast.error("Something Went Wrong! (Text)");
    }

    // Image API
    try {
      setOpen(true);

      var formImageData = new FormData();
      formImageData.append("file", fileList[0]);
      formImageData.append("image", imgData);

      var requestImageOptions = {
        method: 'POST',
        body: formImageData,
        redirect: 'follow'
      };

      const url = `${process.env.REACT_APP_API_URL}/public/api/watermark-pdf-image`;
      responseImage = await toast.promise(
        fetch(url, requestImageOptions), {
        pending: "Adding Watermark (Image) Files...",
      });

      if (!responseImage.ok) {
        throw new Error(`Error! status: ${responseImage.status}`);
      }

      const data = await responseImage.json();

      if (data.status) {
        setFileList(data);
        navigate("/Download_PDF", {
          state: {
            name: "Watermark PDF", // Your custom string
            file: data.data.file, // The value from data.data.file
          },
        });
        toast.error(`${data.msg} (Image)`);
      } else {
        setOpen(false);
      }
    } catch (error) {
      setOpen(false);
      toast.error("Something Went Wrong! (Image)");
    }

    // setOpen(false);
  }

  // For Sidebar
  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  if (!watermarkData) {
    return null;
  }

  const { title, subTitle, button } = watermarkData;

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
        <SkeletonLoader />
      ) : (
        <div className={style.main} key={watermarkData.id}>
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
                    <div className={style.option__panel__title}>WATERMARK OPTIONS</div>

                    <div className={style.option__tab}>
                      <div className={style["bloc-tabs"]}>
                        <button
                          className={toggleStateWater === 1 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                          onClick={() => handleToggleTab(1)}
                        >
                          <div className={style.svg__icon}>
                            <FormatColorTextIcon />
                          </div>
                          Place text
                        </button>
                        <button
                          className={toggleStateWater === 2 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                          onClick={() => handleToggleTab(2)}
                        >
                          <div className={style.svg__icon}>
                            <AddPhotoAlternateIcon />
                          </div>
                          Place Image
                        </button>
                      </div>

                      <div className={style["content-tabs"]}>
                        <div
                          className={toggleStateWater === 1 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
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
                            pageCount={pageCount}
                            startPage={startPage}
                            handleStartPageChange={handleStartPageChange}
                            endPage={endPage}
                            handleLastPageChange={handleLastPageChange}
                          />
                        </div>

                        <div
                          className={toggleStateWater === 2 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
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
                    onClick={handleButtonClick}
                    className={style["btn--red"]}
                    id={style.processTask}
                  >
                    Add WaterMark
                  </button>
                </div>

                {/* Mobile */}
                {sidebar && (
                  <div className={style.mobile__sidebar}>
                    <div id={style.mobileSidebar}>
                      <div className={`${style.option__panel} ${style["option__panel--active"]}`}>
                        <div className={style.option__panel__title}>WATERMARK OPTIONS</div>

                        <div className={style.option__tab}>
                          <div className={style["bloc-tabs"]}>
                            <button
                              className={toggleStateWater === 1 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                              onClick={() => handleToggleTab(1)}
                            >
                              <div className={style.svg__icon}>
                                <FormatColorTextIcon />
                              </div>
                              Place text
                            </button>
                            <button
                              className={toggleStateWater === 2 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                              onClick={() => handleToggleTab(2)}
                            >
                              <div className={style.svg__icon}>
                                <AddPhotoAlternateIcon />
                              </div>
                              Place Image
                            </button>
                          </div>

                          <div className={style["content-tabs"]}>
                            <div
                              className={toggleStateWater === 1 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
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
                                pageCount={pageCount}
                                startPage={startPage}
                                handleStartPageChange={handleStartPageChange}
                                endPage={endPage}
                                handleLastPageChange={handleLastPageChange}
                              />
                            </div>

                            <div
                              className={toggleStateWater === 2 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
                            >
                              <WatermarkImages
                                imgData={imgData}
                                handleImage={handleImage}
                              />
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
                              onClick={handleButtonClick}
                              className={style["btn--red"]}
                              id={style.processTask}
                            >
                              Add WaterMark
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
        <div className={style.footer__copy}>{watermarkData.footer}</div>
      </div>
    </>
  );
};

export default AddWaterMark;