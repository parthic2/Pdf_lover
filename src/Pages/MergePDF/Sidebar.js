import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import style from "../Pages.module.css";

const Sidebar = ({
  open,
  fileList,
  handleUploadClick,
  sidebar,
  statusMessage,
  isMerging,
  error,
}) => {
  return (
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
              {isMerging && (
                <>
                  <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", flexDirection: "column" }} open={open}>
                    <CircularProgress color="inherit" sx={{ marginBottom: "30px" }} />
                    <div>{statusMessage}</div>
                    {error && <div>{error}</div>}
                  </Backdrop>
                </>
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
                  {isMerging && (
                    <>
                      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", flexDirection: "column" }} open={open}>
                        <CircularProgress color="inherit" sx={{ marginBottom: "30px" }} />
                        <div className={style.statusMessage}>{statusMessage}</div>
                        {error && <div className={style.error}>{error}</div>}
                      </Backdrop>
                    </>
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
  );
};

export default Sidebar;
