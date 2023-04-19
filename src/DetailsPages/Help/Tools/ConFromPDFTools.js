import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCFromPToolApi } from '../../../Redux/Action/DetailsPages/CFromPToolAction';

import style from "./Tools.module.css";
import { Typography } from '@mui/material';
import { getToolsTopicApi } from '../../../Redux/Action/DetailsPages/ToolsTopicAction';

const ConFromPDFTools = () => {

    // For Redux
    const dispatch = useDispatch();

    const toolsData = useSelector((state) => state.CFromPToolsReducer.toolsData);
    const topic = useSelector((state) => state.toolsTopicReducer.topicData);
    // console.log(toolsData);

    useEffect(() => {
        dispatch(getCFromPToolApi());
        dispatch(getToolsTopicApi());
    }, [dispatch]);

    return (
        <>
            <div className={style.docs__title}>
                {topic.CFromPTitle}
            </div>

            {toolsData && toolsData.map((item) => {
                const { id, heading, desc, subDesc, img } = item;
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
                            <Typography variant="subtitle1" sx={{ marginBottom: "12px" }}>{desc}</Typography>
                            <Typography variant="subtitle1">{subDesc}</Typography>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default ConFromPDFTools;