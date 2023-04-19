import React, { useEffect } from 'react';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getFAQApi } from '../../../Redux/Action/DetailsPages/FAQAction';

import style from "./FAQ.module.css";

const FAQ = () => {

    // For Change title dynamically
    useEffect(() => {
        document.title = "Frequently asked question of PDFLover"
    }, []);

    // For Redux
    const dispatch = useDispatch();

    const faqData = useSelector((state) => state.faqReducer.faqData);
    // console.log(faqData);

    const firstQue = useSelector((state) => state.faqReducer.faqData.firstQue);
    const secondQue = useSelector((state) => state.faqReducer.faqData.secondQue);
    const thirdQue = useSelector((state) => state.faqReducer.faqData.thirdQue);
    const fourthQue = useSelector((state) => state.faqReducer.faqData.fourthQue);
    const fifthQue = useSelector((state) => state.faqReducer.faqData.fifthQue);
    const sixQue = useSelector((state) => state.faqReducer.faqData.sixQue);
    const sevenQue = useSelector((state) => state.faqReducer.faqData.sevenQue);
    const eightQue = useSelector((state) => state.faqReducer.faqData.eightQue);

    useEffect(() => {
        dispatch(getFAQApi());
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
            {faqData && (
                <div className={style.block__container}>
                    <div className={style.block__header}>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5">
                                {faqData.title}
                            </Typography>
                        </ThemeProvider>

                        <ThemeProvider theme={theme}>
                            <Typography variant="subtitle1">
                                {faqData.subTitle}
                            </Typography>
                        </ThemeProvider>
                    </div>

                    <div className={style["block__body"]}>
                        <div className={style.faq}>
                            {firstQue && (
                                <div className={style.faq__item}>
                                    <div className={style.faq__item__icon}>

                                    </div>
                                    <div className={style.faq__item__content}>
                                        <div className={style.faq__item__title}>
                                            <Typography variant="h6">
                                                {firstQue.question}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1">
                                                <b>{firstQue.stuff}</b> {firstQue.answers}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {secondQue && (
                                <div className={style.faq__item}>
                                    <div className={style.faq__item__icon}>

                                    </div>
                                    <div className={style.faq__item__content}>
                                        <div className={style.faq__item__title}>
                                            <Typography variant="h6">
                                                {secondQue.question}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1">
                                                <b>{secondQue.stuff}</b> {secondQue.answers}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {thirdQue && (
                                <div className={style.faq__item}>
                                    <div className={style.faq__item__icon}>

                                    </div>
                                    <div className={style.faq__item__content}>
                                        <div className={style.faq__item__title}>
                                            <Typography variant="h6">
                                                {thirdQue.question}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1">
                                                {thirdQue.str}  <b>{thirdQue.stuff}</b> {thirdQue.answers}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {fourthQue && (
                                <div className={style.faq__item}>
                                    <div className={style.faq__item__icon}>

                                    </div>
                                    <div className={style.faq__item__content}>
                                        <div className={style.faq__item__title}>
                                            <Typography variant="h6">
                                                {fourthQue.question}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1">
                                                {fourthQue.str}  <b>{fourthQue.stuff}</b> {fourthQue.answers}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {fifthQue && (
                                <div className={style.faq__item}>
                                    <div className={style.faq__item__icon}>

                                    </div>
                                    <div className={style.faq__item__content}>
                                        <div className={style.faq__item__title}>
                                            <Typography variant="h6">
                                                {fifthQue.question}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1">
                                                {fifthQue.answers}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {sixQue && (
                                <div className={style.faq__item}>
                                    <div className={style.faq__item__icon}>

                                    </div>
                                    <div className={style.faq__item__content}>
                                        <div className={style.faq__item__title}>
                                            <Typography variant="h6">
                                                {sixQue.question}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1">
                                                <b>{sixQue.stuff}</b> {sixQue.str} <b>{sixQue.stuff2}</b> {sixQue.answers}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {sevenQue && (
                                <div className={style.faq__item}>
                                    <div className={style.faq__item__icon}>

                                    </div>
                                    <div className={style.faq__item__content}>
                                        <div className={style.faq__item__title}>
                                            <Typography variant="h6">
                                                {sevenQue.question}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1">
                                                {sevenQue.answers}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {eightQue && (
                                <div className={style.faq__item}>
                                    <div className={style.faq__item__icon}>

                                    </div>
                                    <div className={style.faq__item__content}>
                                        <div className={style.faq__item__title}>
                                            <Typography variant="h6">
                                                {eightQue.question}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1">
                                                <b>{eightQue.stuff}</b> {eightQue.answers} <b>{eightQue.stuff2}</b> {eightQue.str}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FAQ;