import React, { useEffect } from 'react';
import OrganizeTools from './OrganizeTools';
import { ThemeProvider, Typography, createTheme } from '@mui/material';

import style from "./Tools.module.css";
import OptimizeTools from './OptimizeTools';
import EditTools from './EditTools';
import ConToPDFTools from './ConToPDFTools';
import ConFromPDFTools from './ConFromPDFTools';
import SecurityPDFTools from './SecurityPDFTools';
import TechTools from './TechTools';
import { useDispatch, useSelector } from 'react-redux';
import { getToolsTopicApi } from '../../../Redux/Action/DetailsPages/ToolsTopicAction';

const Tools = () => {

    // For Change title dynamically
    useEffect(() => {
        document.title = "All the help you need to enjoy our online tools for managing PDFs"
    }, []);

    // For Redux
    const dispatch = useDispatch();

    const topic = useSelector((state) => state.toolsTopicReducer.topicData);
    // console.log(toolsData);

    useEffect(() => {
        dispatch(getToolsTopicApi());
    }, [dispatch]);

    const theme = createTheme();

    theme.typography.h5 = {
        fontSize: "2.5rem",
        color: "#383e45",
        "@media (min-width:600px)": {
            fontSize: "1.5rem",
        },
        "@media (max-width:590px)": {
            fontSize: "2.3rem",
        },
        "@media (max-width:460px)": {
            fontSize: "1.9rem",
        },
        "@media (max-width:380px)": {
            fontSize: "1.6rem",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "2.8rem",
        },
    };

    theme.typography.subtitle1 = {
        color: "#383e45",
        "@media (max-width:590px)": {
            fontSize: "1.2rem",
        },
        "@media (max-width:380px)": {
            fontSize: "1rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1.3rem",
        },
    };


    return (
        <div className={`${style.block} ${style["block--white"]}`}>
            <div className={style.block__container}>
                <div className={style.block__header}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h5">
                            {topic.heading}
                        </Typography>
                    </ThemeProvider>

                    <ThemeProvider theme={theme}>
                        <Typography variant="subtitle1">
                            {topic.subHeading}
                        </Typography>
                    </ThemeProvider>
                </div>

                {/* body */}
                <div className={style["block__body"]}>
                    <div className={style.docs}>
                        <OrganizeTools />
                        <OptimizeTools />
                        <EditTools />
                        <ConToPDFTools />
                        <ConFromPDFTools />
                        <SecurityPDFTools />
                        <TechTools />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools;