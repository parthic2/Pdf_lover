import { Button } from '@mui/material';
import React from 'react';
import style from "./WatermarkImages.module.css";

const WatermarkImages = ({ handleImage, imgData }) => {
    return (
        <div className={style.image__style}>
            <Button
                variant="contained"
                component="label"
                id={style.image__btn}
                title="choose image">
                <input
                    type="file"
                    onChange={handleImage}
                    accept=".png, .jpg,. jpeg, .bmp"
                />
                <span>Choose Image</span>
            </Button>

            <div className={style.image_display}>
                <img alt="" src={imgData} />{imgData.name}
            </div>
        </div>
    )
}

export default WatermarkImages;