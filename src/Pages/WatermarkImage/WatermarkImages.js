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
                    multiple
                    onChange={handleImage}
                    accept=".png, .jpg,. jpeg, .bmp"
                />
                <span>Choose Image</span>
            </Button>
            <div style={{ marginTop: "10px" }}>{imgData.name}</div>
        </div>
    )
}

export default WatermarkImages;