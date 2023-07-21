import React from 'react';
import Skeleton from "react-loading-skeleton";
import { Box } from "@mui/material";
import style from "../../Pages/Pages.module.css";

const SkeletonLoader = () => {
    return (
        <div className={style.main}>
            <div className={style.tool}>
                <div className={style.tool__workarea} id="workArea">
                    <div className={style.tool__header}>
                        <div className={style["skeleton-container"]}>
                            <Box
                                className={style["skeleton-box"]}
                                sx={{
                                    width: "30%",
                                }}
                            >
                                <Skeleton height={150} width={150} />
                            </Box>
                            <Box
                                className={style["skeleton-box"]}
                                sx={{
                                    width: "60%",
                                }}
                            >
                                <Skeleton height={150} width={150} />
                            </Box>
                            <Box
                                className={style["skeleton-box"]}
                                sx={{
                                    width: "20%",
                                }}
                            >
                                <Skeleton height={150} width={150} />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonLoader;