import React from 'react';
import style from "../Pages/Pages.module.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const ViewPdf = ({ pageNumber, files, rotation }) => {
    return (
        <div className={style.tool__workarea__display}>
            {files.map((file, i) => (
                <div className={style.tool__workarea__rendered} key={i}>
                    <div className={style.file}>
                        <div className={style.file__canvas}>
                            <Document file={file}>
                                <Page pageNumber={pageNumber} rotate={rotation} />
                            </Document>
                        </div>
                        <div className={style.file__info}>
                            <span className={style.file__info__name}>{file.name}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ViewPdf;