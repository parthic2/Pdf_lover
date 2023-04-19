import { Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import style from "../Pages/MergePDF/MergePDF.module.css";

const DownloadMerge = () => {
  return (
    <div>
      <Navbar />
      <div className={style.main}>
        <div className={style.tool}>
          {/* workarea */}
          <div className={style.tool__workarea} id="workArea">
            <div className={style.tool__header}>
              <Typography variant="h4" className={style.tool__header__title}>
                PDFs have been merged!
              </Typography>
            </div>

            {/* Download button */}
            <div id="uploader" className={style.uploader}>
              <Button
                variant="contained"
                component="label"
                id={style.pickFiles}
                title="button">
                <span>
                  <i
                    className="fa-solid fa-download"
                    style={{ marginRight: "10px" }}
                  />
                  Download merged PDF
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DownloadMerge;
