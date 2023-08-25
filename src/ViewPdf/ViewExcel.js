import React from 'react';
import style from "../Pages/Pages.module.css";

const ViewExcel = ({ files }) => {
    return (
        <div className={style.tool__workarea__display}>
            {files.map((file, i) => (
                <div className={style.tool__workarea__rendered} key={i}>
                    <div className={style.file}>
                        <img src="image/Excel.svg" alt="svg" />

                        <div className={style.file__info}>
                            <span className={style.file__info__name}>{file.name}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ViewExcel;