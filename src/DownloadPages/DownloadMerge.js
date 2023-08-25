import { Button } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import style from "./MergePDF.module.css";
import { useLocation } from 'react-router-dom';

const DownloadMerge = () => {

  const location = useLocation();
  // console.log(location);
  const pdfUrl = location.state.file;
  // console.log(pdfUrl);
  const pdfName = location.state.name;

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = pdfName;
      link.style.display = "none"; // Hide the link element
      document.body.appendChild(link);
      link.click();

      // Clean up
      URL.revokeObjectURL(blobUrl);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={style.main}>
        <div className={style.tool}>
          {/* workarea */}
          <div className={style.tool__workarea} id="workArea">
            <div className={style.tool__header}>
              <h4 className={style.tool__header__title}>
                PDF's have been Ready for download!
              </h4>
            </div>

            {/* Download button */}
            <div id="uploader" className={style.uploader}>
              {/* <Button><Link to="/"><BiArrowBack /></Link></Button> */}
              <Button
                variant="contained"
                component="label"
                id={style.pickFiles}
                title="button"
                onClick={handleDownload}
              >
                <span>
                  Download your PDF
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