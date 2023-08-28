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
  pageCount,
  toggleStateSplit,
  handleToggleTab,
  handleStartPageChange,
  handleLastPageChange,
  startPage,
  endPage
}) => {
  return (
    <>
      {/* Desktop */}
      <div className={style.tool__sidebar} id={style.sidebar}>
        <div
          className={`${style.option__panel} ${style["option__panel--active"]}`}>
          <div className={style.option__panel__title}>SPLIT PDF</div>

          <div className={style.option__tab}>
            <div className={style["bloc-tabs"]}>
              <button
                className={toggleStateSplit === 1 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                onClick={() => handleToggleTab(1)}
              >
                <div>
                  <img src="/image/SplitRange.svg" alt="Split by Range" style={{ marginBottom: "5px" }} loading="lazy" />
                </div>
                Split by Range
              </button>
              <button
                className={toggleStateSplit === 2 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                onClick={() => handleToggleTab(2)}
              >
                <div>
                  <img src="/image/ExtractPage.svg" alt="Extract Pages" style={{ marginBottom: "5px" }} loading="lazy" />
                </div>
                Extract Pages
              </button>
            </div>

            <div className={style["content-tabs"]}>
              <div
                className={toggleStateSplit === 1 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
              >
                <p className={style.range_mode}>custom ranges:</p>

                <div className={style.page__range}>
                  <label htmlFor="startPageInput">From Page:</label>
                  <input
                    type="number"
                    id={style.startPageInput}
                    min={1}
                    max={pageCount}
                    value={startPage}
                    onChange={handleStartPageChange}
                  />
                  <label htmlFor="lastPageInput">To Page:</label>
                  <input
                    type="number"
                    id={style.lastPageInput}
                    min={1}
                    max={pageCount}
                    value={endPage}
                    onChange={handleLastPageChange}
                  />
                </div>
              </div>

              <div
                className={toggleStateSplit === 2 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
              >
                <p className={style.range_mode}>extract mode:</p>

                <div className={style.option__panel__content}>
                  <div className={style.info}>
                    Every selected page of this PDF file will be converted in one separated PDF file.
                    <br /><b>{endPage} PDF</b> will be created.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isMerging &&
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", flexDirection: "column" }} open={open}>
              <CircularProgress color="inherit" sx={{ marginBottom: "30px" }} />
              <div>{statusMessage}</div>
              {error && <div>{error}</div>}
            </Backdrop>
          }

          <button
            onClick={handleUploadClick}
            className={style["btn--red"]}
            id={style.processTask}
          >
            Split PDF
          </button>
        </div>
      </div>

      {/* Mobile */}
      {sidebar && (
        <div className={style.mobile__sidebar}>
          <div id={style.mobileSidebar}>
            <div className={`${style.option__panel} ${style["option__panel--active"]}`}>
              <div className={style.option__panel__title}>SPLIT PDF</div>

              <div className={style.option__tab}>
                <div className={style["bloc-tabs"]}>
                  <button
                    className={toggleStateSplit === 1 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                    onClick={() => handleToggleTab(1)}
                  >
                    <div>
                      <img src="/image/SplitRange.svg" alt="Split by Range" style={{ marginBottom: "5px" }} loading="lazy" />
                    </div>
                    Split by Range
                  </button>
                  <button
                    className={toggleStateSplit === 2 ? `${style.tabs} ${style["active-tabs"]}` : `${style.tabs}`}
                    onClick={() => handleToggleTab(2)}
                  >
                    <div>
                      <img src="/image/ExtractPage.svg" alt="Extract Pages" style={{ marginBottom: "5px" }} loading="lazy" />
                    </div>
                    Extract Pages
                  </button>
                </div>

                <div className={style["content-tabs"]}>
                  <div
                    className={toggleStateSplit === 1 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
                  >
                    <p className={style.range_mode}>custom ranges:</p>

                    <div className={style.page__range}>
                      <label htmlFor="startPageInput">From Page:</label>
                      <input
                        type="number"
                        id={style.startPageInput}
                        min={1}
                        max={pageCount}
                        value={startPage}
                        onChange={handleStartPageChange}
                      />
                      <label htmlFor="lastPageInput">To Page:</label>
                      <input
                        type="number"
                        id={style.lastPageInput}
                        min={1}
                        max={pageCount}
                        value={endPage}
                        onChange={handleLastPageChange}
                      />
                    </div>
                  </div>

                  <div
                    className={toggleStateSplit === 2 ? `${style.content} ${style["active-content"]}` : `${style.content}`}
                  >
                    <p className={style.range_mode}>extract mode:</p>

                    <div className={style.option__panel__content}>
                      <div className={style.info}>
                        Every selected page of this PDF file will be converted in one separated PDF file.
                        <br /><b>{endPage} PDF</b> will be created.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {fileList.length >= 1 && (
                <>
                  {isMerging && (
                    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", flexDirection: "column" }} open={open}>
                      <CircularProgress color="inherit" sx={{ marginBottom: "30px" }} />
                      <div className={style.statusMessage}>{statusMessage}</div>
                      {error && <div className={style.error}>{error}</div>}
                    </Backdrop>
                  )}

                  <button
                    onClick={handleUploadClick}
                    className={style["btn--red"]}
                    id={style.processTask}
                  >
                    Split PDF
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