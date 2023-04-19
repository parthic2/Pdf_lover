import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTechToolApi } from '../../../Redux/Action/DetailsPages/TechToolAction';

import style from "./Tools.module.css";
import { Typography } from '@mui/material';
import { getToolsTopicApi } from '../../../Redux/Action/DetailsPages/ToolsTopicAction';

const TechTools = () => {

    // For Redux
    const dispatch = useDispatch();

    const toolsData = useSelector((state) => state.techToolsReducer.toolsData);
    const topic = useSelector((state) => state.toolsTopicReducer.topicData);
    // console.log(toolsData);

    useEffect(() => {
        dispatch(getTechToolApi());
        dispatch(getToolsTopicApi());
    }, [dispatch]);

    return (
        <>
            <div className={style.docs__title}>
                {topic.techTitle}
            </div>

            {toolsData && toolsData.map((item) => {
                const { id, heading, desc } = item;
                return (
                    <div className={style.docs__item} key={id}>
                        <div className={style.docs__item__img}>
                        </div>
                        <div className={style.docs__item__content}>
                            <Typography variant="h3">{heading}</Typography>
                            <Typography variant="subtitle1">{desc}</Typography>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default TechTools;