import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSecurityToolApi } from '../../../Redux/Action/DetailsPages/SecurityToolAction';

import style from "./Tools.module.css";
import { Typography } from '@mui/material';
import { getToolsTopicApi } from '../../../Redux/Action/DetailsPages/ToolsTopicAction';

const SecurityPDFTools = () => {

    // For Redux
    const dispatch = useDispatch();

    const toolsData = useSelector((state) => state.securityToolsReducer.toolsData);
    const topic = useSelector((state) => state.toolsTopicReducer.topicData);
    // console.log(toolsData);

    useEffect(() => {
        dispatch(getSecurityToolApi());
        dispatch(getToolsTopicApi());
    }, [dispatch]);

    return (
        <>
            <div className={style.docs__title}>
                {topic.secTitle}
            </div>

            {toolsData && toolsData.map((item) => {
                const { id, heading, desc, subDesc, img, title, title1 } = item;
                return (
                    <div className={style.docs__item} key={id}>
                        <div className={style.docs__item__img}>
                            <img
                                src={img}
                                alt={heading}
                            />
                        </div>
                        <div className={style.docs__item__content}>
                            <Typography variant="h3">{heading}</Typography>
                            <Typography variant="subtitle2" sx={{ marginBottom: "12px", fontSize: "1em" }}>{title}</Typography>
                            <Typography variant="subtitle1" sx={{ marginBottom: "12px" }}>{desc}</Typography>
                            <Typography variant="subtitle2" sx={{ marginBottom: "12px", fontSize: "1em" }}>{title1}</Typography>
                            <Typography variant="subtitle1">{subDesc}</Typography>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default SecurityPDFTools;