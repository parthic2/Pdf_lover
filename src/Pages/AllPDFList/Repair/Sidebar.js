import React from "react";
import style from "../../Pages.module.css";
import LoaderBackdrop from "../../../Common/Backdrop";

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

        {isMerging && <LoaderBackdrop statusMessage={statusMessage} error={error} open={open} />}

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
                    <LoaderBackdrop statusMessage={statusMessage} error={error} open={open} />
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