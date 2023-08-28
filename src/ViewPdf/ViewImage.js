import React from 'react';
import style from "../Pages/Pages.module.css";

const ViewImage = ({ files, selectedImages }) => {
    return (
        <div className={style.tool__workarea__display}>
            {files.map((file, i) => (
                <div className={style.tool__workarea__rendered} key={i}>
                    <div className={style.file}>
                        {selectedImages && (
                            <div className={style.file__canvas}>
                                <img src={URL.createObjectURL(file)} alt="Selected" className={style.canvas_image} loading="lazy" />
                            </div>
                        )}

                        <div className={style.file__info}>
                            <span className={style.file__info__name}>{file.name}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ViewImage;