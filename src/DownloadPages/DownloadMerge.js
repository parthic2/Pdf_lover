import { Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import style from "./MergePDF.module.css";
import { useLocation } from 'react-router-dom';

const DownloadMerge = () => {

  // const handleDownload = () => {
  //   // window.open(pdfUrl, "_blank");
  // };

  const location = useLocation();

  const pdfUrl = location.state.name;
  // console.log(pdfUrl);

  // const handleDownload = async () => {
  //   try {
  //     const url = "https://pdflover.stackholic.io/public/api/merge";
  //     const response = await fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify({ pdfUrl }),
  //       headers: {
  //         "Content-Type": "application/pdf"
  //       },
  //     });

  //     const data = await response.blob();
  //     const blobUrl = window.URL.createObjectURL(new Blob([data]));
  //     const link = document.createElement("a");
  //     link.href = blobUrl;
  //     link.setAttribute("download", `${Date.now()}.pdf`);
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.log("Error Downloading the PDF:", error);
  //   }
  // }

  const handleDownload = async () => {
    const fileUrl = pdfUrl;
    console.log(fileUrl);

    try {
      const response = await fetch(fileUrl);
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "merged_pdf.pdf";
        link.click();
        // window.open(url);
      } else {
        console.log("Failed to fetch the PDF file.");
      }
    } catch (error) {
      console.log("Error occurred while fetching the PDF file:", error);
    }
  }

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
                title="button"
                onClick={handleDownload}
              >
                <span>
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

// env file add karvani che