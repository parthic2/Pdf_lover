import FormatSizeIcon from '@mui/icons-material/FormatSize';

import style from "./WatermarkText.module.css";

const WatermarkText = ({
  isOpen,
  setIsOpen,
  text,
  changeText,
  currentFont,
  changeFont,
  fontSize,
  setFontSize,
  incrementFontSize,
  decrementFontSize,
  transparency,
  changeTransparency,
  setColor,
  textStyle,
  handleStyle,
  mosaic,
  setMosaic,
  rotation,
  changeRotation,
  changeVerPosition,
  verticalPos,
  changeHorPosition,
  horizontalPos,
  pageCount,
  startPage,
  endPage,
  handleStartPageChange,
  handleLastPageChange
}) => {

  return (
    <>
      <div className={style.option__panel__content}>
        {/* Text */}
        <div className={style.form__group}>
          <label className={style.option__title}>Text:</label>
          <input
            className={`${style.option} ${style.input}`}
            type="text"
            name="text"
            value={text}
            onChange={(event) => changeText(event.target.value)}
          />
        </div>

        <div className={style.box}></div>

        <p className={style.option__title}>Text format:</p>

        <div className={style.editor__toolbar__options} id="textFormatOptions">
          <div className={style.editor__toolbar__block}>
            <div className={style.editor__toolbar__option}>
              <div className={style.editor__option__selector}>
                <div className={style.editor__option__content}>
                  {/* Font Family */}
                  <select
                    onChange={(event) => changeFont(event.target.value)}
                    value={currentFont}
                  >
                    <option
                      className={style["font-selected"]}
                      style={{ fontFamily: "lohit-marathi" }}
                      value="lohit-marathi"
                    >
                      Lohit marathi
                    </option>
                    <option
                      className={style["font-selector"]}
                      style={{ fontFamily: "arial" }}
                      value="arial"
                    >
                      Arial
                    </option>
                    <option
                      className={style["font-selector"]}
                      style={{ fontFamily: "impact" }}
                      value="impact"
                    >
                      Impact
                    </option>
                    <option
                      className={style["font-selector"]}
                      style={{ fontFamily: "arial-unicode-ms" }}
                      value="arial-unicode-ms"
                    >
                      Arial unicode ms
                    </option>
                    <option
                      className={style["font-selector"]}
                      style={{ fontFamily: "verdana" }}
                      value="verdana"
                    >
                      Verdana
                    </option>
                    <option
                      className={style["font-selector"]}
                      style={{ fontFamily: "courier" }}
                      value="courier"
                    >
                      Courier
                    </option>
                    <option
                      className={style["font-selector"]}
                      style={{ fontFamily: "comic" }}
                      value="comic"
                    >
                      Comic
                    </option>
                    <option
                      className={style["font-selector"]}
                      style={{ fontFamily: "times-new-roman" }}
                      value="times-new-roman"
                    >
                      Times new roman
                    </option>
                    <option
                      className={style["font-selector"]}
                      style={{ fontFamily: "lohit-devanagari" }}
                      value="lohit-devanagari"
                    >
                      Lohit devanagari
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Font size */}
            <div
              className={style.editor__option__selector}
              onClick={() => setIsOpen(!isOpen)}
            >
              <FormatSizeIcon />
            </div>

            {isOpen && (
              <div className={style.editor__option__content__size}>
                <div className={style["plus-minus-input"]}>
                  <div className={style["input-group-button"]}>
                    <button
                      type="button"
                      className={`${style.button} ${style.hollow} ${style.circle}`}
                      onClick={decrementFontSize}
                    >
                      <i className="fa-solid fa-minus" />
                    </button>
                  </div>

                  <input
                    className={style["mr-10"]}
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={fontSize}
                    min="1"
                    max="100"
                    onChange={(e) => setFontSize(e.target.value)}
                  />

                  <div className={style["input-group-button"]}>
                    <button
                      type="button"
                      className={`${style.button} ${style.hollow} ${style.circle}`}
                      onClick={incrementFontSize}
                    >
                      <i className="fa-solid fa-plus" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Font Color */}
            <input className={style.color} type="color" onChange={(e) => setColor(e.target.value)} />

            {/* Font Style */}
            <div className={style.editor__option__content__font}>
              <select
                onChange={(event) => handleStyle(event.target.value)}
                value={textStyle}
              >
                <option
                  className={style["font-selected"]}
                  value="bold"
                >
                  Bold
                </option>
                <option
                  className={style["font-selector"]}
                  value="italic"
                >
                  Italic
                </option>
                <option
                  className={style["font-selector"]}
                  value="underline"
                >
                  Underline
                </option>
              </select>
            </div>
          </div>

          <div className={style.box}></div>

          {/* Position */}
          <div className={style.option__panel__content}>
            <div className={style.row}>
              <div className={style["col-md-6"]}>
                <div className={style.form__group}>
                  <label className={style.option__title}>Vertical Position:</label>
                  <select
                    onChange={(event) => changeVerPosition(event.target.value)}
                    value={verticalPos}
                  >
                    <option
                      className={style["font-selected"]}
                      value="bottom"
                    >
                      Bottom
                    </option>
                    <option
                      className={style["font-selector"]}
                      value="top"
                    >
                      Top
                    </option>
                    <option
                      className={style["font-selector"]}
                      value="middle"
                    >
                      Middle
                    </option>
                  </select>
                </div>
              </div>

              <div className={style["col-md-6"]}>
                <div className={style.form__group}>
                  <label className={style.option__title}>Horizontal Position:</label>
                  <select
                    onChange={(event) => changeHorPosition(event.target.value)}
                    value={horizontalPos}
                  >
                    <option
                      className={style["font-selected"]}
                      value="left"
                    >
                      Left
                    </option>
                    <option
                      className={style["font-selector"]}
                      value="center"
                    >
                      Center
                    </option>
                    <option
                      className={style["font-selector"]}
                      value="right"
                    >
                      Right
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className={style.form__group} style={{ display: "flex" }}>
            <div className={style["d-flex"]}>
              <input
                type="checkbox"
                name="mosaic"
                checked={mosaic}
                className={style.checkbox}
                onChange={() => setMosaic(!mosaic)}
              />
              <label style={{ fontSize: "15px", paddingTop: "6px" }}>Mosaic</label>
            </div>
          </div>

          {/* Rotation & Transparency */}
          <div className={style.option__panel__content}>
            <div className={style.row}>
              <div className={style["col-md-6"]}>
                <div className={style.form__group}>
                  <label className={style.option__title}>Transparency:</label>
                  <select
                    className={`${style.option} ${style.input}`}
                    value={transparency}
                    onChange={(event) => changeTransparency(event.target.value)}
                  >
                    <option value="No transparency">No transparency</option>
                    <option value="75">75%</option>
                    <option value="50">50%</option>
                    <option value="25">25%</option>
                  </select>
                </div>
              </div>

              <div className={style["col-md-6"]}>
                <div className={style.form__group}>
                  <label className={style.option__title}>Rotation:</label>
                  <select
                    className={`${style.option} ${style.input}`}
                    value={rotation}
                    onChange={(event) => changeRotation(event.target.value)}
                  >
                    <option value="0">Do not rotate</option>
                    <option value="90">90 degrees</option>
                    <option value="180">180 degrees</option>
                    <option value="270">270 degrees</option>
                  </select>
                </div>
              </div>
            </div>
          </div>


          {/* Page Range */}

          <div className={style.option__title}>Pages:</div>

          <div className={style.page__range}>
            <label htmlFor="startPageInput" style={{ fontSize: "15px" }}>From Page:</label>
            <input
              type="number"
              id={style.startPageInput}
              min={1}
              max={pageCount}
              value={startPage}
              onChange={handleStartPageChange}
            />
            <label htmlFor="lastPageInput" style={{ fontSize: "15px" }}>To Page:</label>
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
      </div>
    </>
  )
}

export default WatermarkText;