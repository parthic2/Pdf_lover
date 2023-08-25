import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import style from "../../Pages.module.css";

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
        <div
          className={`${style.option__panel} ${style["option__panel--active"]}`}>
          <div className={style.option__panel__title}>REPAIR PDF</div>

          <div className={style.option__panel__content}>
            <div className={style.info}>
              We will try to repair your PDFs. You can get a different
              file format on download if we detect that format in your
              file.
            </div>
          </div>
        </div>

        {isMerging && <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", flexDirection: "column" }} open={open}>
          <CircularProgress color="inherit" sx={{ marginBottom: "30px" }} />
          <div>{statusMessage}</div>
          {error && <div>{error}</div>}
        </Backdrop>}

        <button
          onClick={handleUploadClick}
          className={style["btn--red"]}
          id={style.processTask}
        >
          Repair PDF
        </button>
      </div>

      {/* Mobile */}
      {sidebar && (
        <div className={style.mobile__sidebar}>
          <div id={style.mobileSidebar}>
            <div className={`${style.option__panel} ${style["option__panel--active"]}`}>
              <div className={style.option__panel__title}>REPAIR PDF</div>

              <div className={style.option__panel__content}>
                <div className={style.info}>
                  We will try to repair your PDFs. You can get a different
                  file format on download if we detect that format in your
                  file.
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
                    onClick={handleUploadClick}
                    className={style["btn--red"]}
                    id={style.processTask}
                  >
                    Repair PDF
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