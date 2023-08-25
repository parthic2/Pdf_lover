import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import style from "../../Pages.module.css";
import { Box } from "@mui/system";

const Sidebar = ({
  open,
  fileList,
  handleUploadClick,
  sidebar,
  statusMessage,
  isMerging,
  error,
  rotation,
  rotateRight
}) => {
  return (
    <>
      {/* Desktop */}
      <div className={style.tool__sidebar} id={style.sidebar}>
        <div
          className={`${style.option__panel} ${style["option__panel--active"]}`}>
          <div className={style.option__panel__title}>ROTATE PDF</div>

          <div className={style.option__tab}>
            <div className={style.option__panel__content}>
              <div className={style.info}>
                Mouse over PDF file below and a icon will appear, click
                on it to rotate your PDFs.
              </div>
            </div>
            <p className={style.rotate}>ROTATION</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={style.rotation_text}>{rotation}</div>
              <div className={style["button-70"]} onClick={rotateRight}>
                Right
              </div>
            </div>
          </div>
        </div>

        {isMerging && <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", flexDirection: "column" }} open={open}>
          <CircularProgress color="inherit" sx={{ marginBottom: "30px" }} />
          <div>{statusMessage}</div>
          {error && <div>{error}</div>}
        </Backdrop>}

        <Box height={25} />
        <button
          onClick={handleUploadClick}
          className={style["btn--red"]}
          id={style.processTask}
        >
          Rotate PDF
        </button>
      </div>

      {/* Mobile */}
      {sidebar && (
        <div className={style.mobile__sidebar}>
          <div id={style.mobileSidebar}>
            <div className={`${style.option__panel} ${style["option__panel--active"]}`}>
              <div className={style.option__panel__title}>ROTATE PDF</div>

              <div className={style.option__tab}>
                <div className={style.option__panel__content}>
                  <div className={style.info}>
                    Mouse over PDF file below and a icon will appear, click
                    on it to rotate your PDFs.
                  </div>
                </div>
                <p className={style.rotate}>ROTATION</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className={style.rotation_text}>{rotation}</div>
                  <div className={style["button-70"]} onClick={rotateRight}>
                    Right
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
                    onClick={handleUploadClick}
                    className={style["btn--red"]}
                    id={style.processTask}
                  >
                    Rotate PDF
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