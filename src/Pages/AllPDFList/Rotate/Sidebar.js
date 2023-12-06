import React from "react";
import style from "../../Pages.module.css";
import { Box } from "@mui/system";
import LoaderBackdrop from "../../../Common/Backdrop";

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

        {isMerging && <LoaderBackdrop statusMessage={statusMessage} error={error} open={open} />}

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
                    <LoaderBackdrop statusMessage={statusMessage} error={error} open={open} />
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