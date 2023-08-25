import { Button } from "@mui/material";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { AiOutlineSetting } from "react-icons/ai";
import style from "../Pages.module.css";
import SkeletonLoader from "../../Components/SkeletonLoader/SkeletonLoader";
import useSplitPDFLogic from "./SplitPDFLogic";
import Sidebar from "./Sidebar";
import ViewPdf from "../../ViewPdf/ViewPdf";

const SplitPDF = () => {
  const {
    files,
    pageNumber,
    open,
    fileList,
    loading,
    sidebar,
    splitData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
    pageCount,
    toggleStateSplit,
    handleToggleTab,
    handleStartPageChange,
    handleLastPageChange,
    startPage,
    endPage
  } = useSplitPDFLogic();

  if (!splitData) {
    return null;
  }

  const { title, subTitle, button } = splitData;

  return (
    <>
      <Navbar />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className={style.main} key={splitData.id}>
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
                open={open}
                fileList={fileList}
                handleUploadClick={handleUploadClick}
                sidebar={sidebar}
                statusMessage={statusMessage}
                isMerging={isMerging}
                error={error}
                pageCount={pageCount}
                toggleStateSplit={toggleStateSplit}
                handleToggleTab={handleToggleTab}
                handleStartPageChange={handleStartPageChange}
                handleLastPageChange={handleLastPageChange}
                startPage={startPage}
                endPage={endPage}
              />
            )}
          </div>
        </div>
      )}

      {/* Footer  */}
      <div className={style.footer}>
        <div className={style.footer__copy}>{splitData.footer}</div>
      </div>
    </>
  );
};

export default SplitPDF;