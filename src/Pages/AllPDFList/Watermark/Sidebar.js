import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import style from "../../Pages.module.css";
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import WatermarkText from "../../WatermarkText/WatermarkText";
import WatermarkImages from "../../WatermarkImage/WatermarkImages";

const Sidebar = ({ text, currentFont, fontSize, setFontSize, transparency, textStyle, mosaic, rotation, verticalPos, horizontalPos, startPage, endPage, imgData, sidebar, fileList, open,  isOpen, setIsOpen, setMosaic, setColor, toggleStateWater, pageCount, changeText, changeFont, handleStyle, incrementFontSize, decrementFontSize, changeTransparency, changeRotation, changeVerPosition, changeHorPosition, handleToggleTab, handleStartPageChange, handleLastPageChange, handleImage, handleButtonClick, statusMessage, isMerging, error }) => {
  return (
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

        {isMerging && <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", flexDirection: "column" }} open={open}>
          <CircularProgress color="inherit" sx={{ marginBottom: "30px" }} />
          <div>{statusMessage}</div>
          {error && <div>{error}</div>}
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
                  {isMerging && (
                    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", flexDirection: "column" }} open={open}>
                      <CircularProgress color="inherit" sx={{ marginBottom: "30px" }} />
                      <div>{statusMessage}</div>
                      {error && <div>{error}</div>}
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
  )
}

export default Sidebar;