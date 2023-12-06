import React from "react";
import { Button } from "@mui/material";
import { AiOutlineSetting } from "react-icons/ai";
import Navbar from "../../Components/Navbar/Navbar";
import style from "../Pages.module.css";
import SkeletonLoader from "../../Components/SkeletonLoader/SkeletonLoader";
import useMergePDFLogic from "./MergePDFLogic";
import Sidebar from "./Sidebar";
import ViewPdf from "../../ViewPdf/ViewPdf";
import Ads from "../../Ads";

const MergePDF = () => {
  const {
    files,
    pageNumber,
    open,
    fileList,
    loading,
    sidebar,
    mergeData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
  } = useMergePDFLogic();

  if (!mergeData) {
    return null;
  }

  const { title, subTitle, button } = mergeData;

  return (
    <>
      <Navbar />

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

              <div className={style.side_btn}>
                <button className={style.toggle__btn} onClick={toggleCart}>
                  <AiOutlineSetting />
                </button>
              </div>

              <div id="uploader" className={style.uploader}>
                <Button variant="contained" component="label" id={style.pickFiles} title={button}>
                  <input type="file" multiple onChange={handleFileChange} accept=".pdf" />
                  <span>{button}</span>
                </Button>

                {fileList.length === 0 && (
                  <div className="banner" style={{ marginTop: "10px" }}><Ads dataAdSlot="7135941684" /></div>
                )}
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
              />
            )}
          </div>
        </div>
      )}

      <div className={style.footer}>
        <div className={style.footer__copy}>{mergeData.footer}</div>
      </div>
    </>
  );
};

export default MergePDF;