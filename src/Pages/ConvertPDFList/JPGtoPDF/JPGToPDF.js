import React from "react";
import { Button } from "@mui/material";
import { AiOutlineSetting } from "react-icons/ai";
import Navbar from "../../../Components/Navbar/Navbar";
import style from "../../Pages.module.css";
import SkeletonLoader from "../../../Components/SkeletonLoader/SkeletonLoader";
import useJPGLogic from "./JPGLogic";
import Sidebar from "./Sidebar";
import ViewImage from "../../../ViewPdf/ViewImage";

const JPGToPDF = () => {
  const { selectedImages,
    files,
    open,
    fileList,
    loading,
    sidebar,
    jtoPData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error } = useJPGLogic();

  if (!jtoPData) {
    return null;
  }

  const { title, subTitle, button } = jtoPData;

  return (
    <>
      <Navbar />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className={style.main} key={jtoPData.id}>
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
                    onChange={handleFileChange}
                    accept=".png, .jpg, .jpeg, .bmp"
                  />
                  <span>{button}</span>
                </Button>
              </div>

              {/* For view image */}
              <ViewImage selectedImages={selectedImages} files={files} />
            </div>

            {/* Sidebar */}
            {fileList.length >= 1 && (
              <Sidebar
                open={open}
                fileList={fileList}
                handleUploadClick={handleUploadClick}
                sidebar={sidebar}
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
        <div className={style.footer__copy}>{jtoPData.footer}</div>
      </div>
    </>
  );
};

export default JPGToPDF;