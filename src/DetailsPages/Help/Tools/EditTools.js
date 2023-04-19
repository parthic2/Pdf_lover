import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEditToolApi } from '../../../Redux/Action/DetailsPages/EditToolAction';

import style from "./Tools.module.css";
import { Typography } from '@mui/material';
import { getToolsTopicApi } from '../../../Redux/Action/DetailsPages/ToolsTopicAction';

const EditTools = () => {

    // For Redux
    const dispatch = useDispatch();

    const toolsData = useSelector((state) => state.editToolsReducer.toolsData);
    const topic = useSelector((state) => state.toolsTopicReducer.topicData);
    // console.log(toolsData);

    useEffect(() => {
        dispatch(getEditToolApi());
        dispatch(getToolsTopicApi());
    }, [dispatch]);

    return (
        <>
            <div className={style.docs__title}>
                {topic.editTitle}
            </div>

            {toolsData && toolsData.map((item) => {
                const { id, heading, desc, subDesc, subDesc1, img } = item;
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
                            <Typography variant="subtitle1" sx={{ marginBottom: "12px" }}>{subDesc}</Typography>
                            <Typography variant="subtitle1">{subDesc1}</Typography>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default EditTools;