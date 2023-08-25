import { Button } from "@mui/material";
import Navbar from "../../../Components/Navbar/Navbar";
import { AiOutlineSetting } from 'react-icons/ai';
import style from "../../Pages.module.css";
import SkeletonLoader from "../../../Components/SkeletonLoader/SkeletonLoader";
import useWatermarkLogic from "./WatermarkLogic";
import ViewPdf from "../../../ViewPdf/ViewPdf";
import Sidebar from "./Sidebar";

const AddWaterMark = () => {
  const { text, currentFont, fontSize, setFontSize, transparency, textStyle, mosaic, rotation, verticalPos, horizontalPos, startPage, endPage, imgData, sidebar, loading, fileList, open, pageNumber, files, handleFileChange, isOpen, setIsOpen, setMosaic, setColor, toggleStateWater, pageCount, changeText, changeFont, handleStyle, incrementFontSize, decrementFontSize, changeTransparency, changeRotation, changeVerPosition, changeHorPosition, handleToggleTab, handleStartPageChange, handleLastPageChange, handleImage, handleButtonClick, toggleCart, watermarkData, statusMessage, isMerging, error } = useWatermarkLogic();

  if (!watermarkData) {
    return null;
  }
  const { title, subTitle, button } = watermarkData;

  return (
    <>
      <Navbar />

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
              <ViewPdf pageNumber={pageNumber} files={files} />
            </div>

            {/* Sidebar */}
            {fileList.length >= 1 && (
              <Sidebar
                text={text}
                currentFont={currentFont}
                fontSize={fontSize}
                setFontSize={setFontSize}
                transparency={transparency}
                textStyle={textStyle}
                mosaic={mosaic}
                rotation={rotation}
                verticalPos={verticalPos}
                horizontalPos={horizontalPos}
                startPage={startPage}
                endPage={endPage}
                imgData={imgData}
                sidebar={sidebar}
                fileList={fileList}
                open={open}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setMosaic={setMosaic}
                setColor={setColor}
                toggleStateWater={toggleStateWater}
                pageCount={pageCount}
                changeText={changeText}
                changeFont={changeFont}
                handleStyle={handleStyle}
                incrementFontSize={incrementFontSize}
                decrementFontSize={decrementFontSize}
                changeTransparency={changeTransparency}
                changeRotation={changeRotation}
                changeVerPosition={changeVerPosition}
                changeHorPosition={changeHorPosition}
                handleToggleTab={handleToggleTab}
                handleStartPageChange={handleStartPageChange}
                handleLastPageChange={handleLastPageChange}
                handleImage={handleImage}
                handleButtonClick={handleButtonClick}
                statusMessage={statusMessage}
                isMerging={isMerging}
                error={error}
              />
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