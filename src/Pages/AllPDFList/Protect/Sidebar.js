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
  formInput,
  formError,
  handleUserInput
}) => {
  return (
    <>
      {/* Desktop */}
      <div className={style.tool__sidebar} id={style.sidebar}>
        <div
          className={`${style.option__panel} ${style["option__panel--active"]}`}>
          <div className={style.option__panel__title}>
            protect pdf
          </div>

          <div className={style.option__panel__content}>
            <h4 className={style.option__title}>
              set a password to protect your pdf file
            </h4>
            <form>
              <p>Password</p>
              <input
                value={formInput.password}
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <p className={style["error-message"]}>{formError.password}</p>

              <p>Confirm Password</p>
              <input
                value={formInput.confirmPassword}
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
                name="confirmPassword"
                type="password"
                className="input"
                placeholder="Confirm Password"
              />
              <p className={style["error-message"]}>
                {formError.confirmPassword}
              </p>
            </form>
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
          Protect PDF
        </button>
      </div>

      {/* Mobile */}
      {sidebar && (
        <div className={style.mobile__sidebar}>
          <div id={style.mobileSidebar}>
            <div className={`${style.option__panel} ${style["option__panel--active"]}`}>
              <div className={style.option__panel__title}>
                protect pdf
              </div>

              <div className={style.option__panel__content}>
                <h4 className={style.option__title}>
                  set a password to protect your pdf file
                </h4>
                <form>
                  <p>Password</p>
                  <input
                    value={formInput.password}
                    onChange={({ target }) => {
                      handleUserInput(target.name, target.value);
                    }}
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <p className={style["error-message"]}>{formError.password}</p>

                  <p>Confirm Password</p>
                  <input
                    value={formInput.confirmPassword}
                    onChange={({ target }) => {
                      handleUserInput(target.name, target.value);
                    }}
                    name="confirmPassword"
                    type="password"
                    className="input"
                    placeholder="Confirm Password"
                  />
                  <p className={style["error-message"]}>
                    {formError.confirmPassword}
                  </p>
                </form>
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
                    Protect PDF
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