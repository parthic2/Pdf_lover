import React, { useEffect, useState } from 'react';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPricingApi } from '../../Redux/Action/DetailsPages/Pricing/PricingAction';
import { getFreeDataApi } from '../../Redux/Action/DetailsPages/Pricing/FreeCardAction';
import { getBusinessDataApi } from '../../Redux/Action/DetailsPages/Pricing/BusinessCardAction';
import { getPremiumDataApi } from '../../Redux/Action/DetailsPages/Pricing/PremiumCardAction';
// import Ads from '../../Ads';

import style from './Pricing.module.css';

const Pricing = () => {

    // For Change title dynamically
    useEffect(() => {
        document.title = "Pricing of PDFLover"
    }, []);

    // For Redux
    const dispatch = useDispatch();

    const pricingData = useSelector((state) => state.pricingReducer.pricingData);
    // console.log(pricingData);

    const freeData = useSelector((state) => state.freeDataReducer.freeData);
    const listData = useSelector((state) => state.freeDataReducer.freeData.list);
    const businessData = useSelector((state) => state.businessDataReducer.businessData);
    const businessListData = useSelector((state) => state.businessDataReducer.businessData.list);
    const premiumData = useSelector((state) => state.premiumDataReducer.premiumData);
    const premiumListData = useSelector((state) => state.premiumDataReducer.premiumData.list);

    useEffect(() => {
        dispatch(getPricingApi());
        dispatch(getFreeDataApi());
        dispatch(getBusinessDataApi());
        dispatch(getPremiumDataApi());
    }, [dispatch]);

    // For Mui 
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

    theme.typography.h4 = {
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

    // For Active tabs
    const [togglePriceState, setTogglePriceState] = useState(1);

    const handleToggleTab = (index) => {
        setTogglePriceState(index);
        // console.log(index);
    }

    return (
        <div className={`${style.block} ${style["block--white"]}`}>

            {/* <Ads dataAdSlot="7135941684" /> */}

            <div className={style.block__container}>
                <div className={style.block__header}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h5">
                            {pricingData.heading}
                        </Typography>
                    </ThemeProvider>
                </div>

                {/* Tabs */}
                <div className={style["payment-period"]}>
                    <div className={style["payment-period__payments"]}>
                        <span
                            className={togglePriceState === 1 ?
                                `${style["payment-period__payments__item"]} ${style["payment-period__payments__item--active"]}` :
                                `${style["payment-period__payments__item"]}`
                            }
                            onClick={() => handleToggleTab(1)}
                        >
                            {pricingData.tab1}
                        </span>
                        <span
                            className={togglePriceState === 2 ?
                                `${style["payment-period__payments__item"]} ${style["payment-period__payments__item--active"]}` :
                                `${style["payment-period__payments__item"]}`
                            }
                            onClick={() => handleToggleTab(2)}
                        >
                            {pricingData.tab2}
                        </span>

                    </div>
                </div>

                <section className={style.pricing}>
                    {/* 1st */}
                    <div className={style["card-wrapper"]}>
                        <div className={style["card-header"]}>
                            <h2>{freeData.title}</h2>
                        </div>

                        <div className={style["h-100"]}>
                            {listData && listData.map((item) => {
                                const { id, data } = item;
                                return (
                                    <div className={style["card-detail"]} key={id}>
                                        <p className={style["price_details"]}>
                                            <span className="fa-solid fa-check" id={style.check} />
                                            {data}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className={style["card-price"]}>
                            <p><sup>₹ </sup>{freeData.price}</p>
                        </div>

                        <button className={style["card-button"]}>{freeData.button}</button>
                    </div>

                    {/* 2nd */}
                    <div className={style["card-wrapper"]}>
                        <div className={togglePriceState === 1 ? `{style["pricing__account--premium"]}` : "content"}
                        >
                            <div className={style["card-header"]}>
                                <h2>{premiumData.title}</h2>
                            </div>

                            {premiumListData && premiumListData.map((item) => {
                                const { id, data } = item;
                                return (
                                    <div className={style["card-detail"]} key={id}>
                                        <p className={style.price_details}>
                                            <span className="fa-solid fa-check" id={style.check} />
                                            {data}
                                        </p>
                                    </div>
                                )
                            })}

                            <div className={style["card-price"]}>
                                <p><sup>₹ </sup>{premiumData.price} <sub>/month </sub></p>
                            </div>

                            <button className={style["card-button"]}>{premiumData.button}</button>
                        </div>

                        <div className={togglePriceState === 2 ? `{style["pricing__account--premium"]}` : "content"}
                        >
                            <div className={style["card-header"]}>
                                <h2>{premiumData.title}</h2>
                            </div>

                            {premiumListData && premiumListData.map((item) => {
                                const { id, data } = item;
                                return (
                                    <div className={style["card-detail"]} key={id}>
                                        <p className={style.price_details}>
                                            <span className="fa-solid fa-check" id={style.check} />
                                            {data}
                                        </p>
                                    </div>
                                )
                            })}

                            <div className={style["card-price"]}>
                                <p><sup>₹ </sup>{premiumData.yearPrice}<sub>/month </sub></p>
                            </div>

                            <p className={style.pricing__account__price__resume}>
                                {premiumData.small}
                                <br />
                                {premiumData.smallData} <strong>{premiumData.strong}</strong>
                            </p>

                            <button className={style["card-button"]}>{premiumData.button}</button>
                        </div>
                    </div>

                    {/* 3rd */}
                    <div className={style["card-wrapper"]}>
                        <div className={style["card-header"]}>
                            <h2>{businessData.title}</h2>
                        </div>

                        <div className={style["h-100"]}>
                            {businessListData && businessListData.map((item) => {
                                const { id, data } = item;
                                return (
                                    <div className={style["card-detail"]} key={id}>
                                        <p className={style.price_details}>
                                            <span className="fa-solid fa-check" id={style.check} />
                                            {data}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className={style.pricing__account__price__resume}>
                            <p style={{
                                fontWeight: 800,
                                paddingTop: "14px"
                            }}>{businessData.price}</p>
                            <p>{businessData.desc}</p>
                        </div>

                        <button className={style["card-button"]}>{businessData.button}</button>
                    </div>
                </section>

                {/* <div className={style.pricing}>

                    1st
                    <div className={`${style.pricing__account}`}>
                        <div className={style.pricing__account__header}>
                            <h3 className={style.pricing__account__tier}>
                                {freeData.title}
                            </h3>
                            <div className={style.pricing__account__price}>
                                ₹
                                <span>{freeData.price}</span>
                            </div>
                        </div>

                        <div className={style.pricing__account__action}>
                            <button className={style["btn--white"]}>{freeData.button}</button>
                        </div>

                        <div className={style.pricing__account__body}>
                            <p>{freeData.label}</p>

                            {listData && listData.map((item) => {
                                const { id, data } = item;
                                return (
                                    <ul className={style.listCheck} key={id}>
                                        <li className={style.listCheck__item}>
                                            <i className="fa-solid fa-check" />
                                            {data}
                                        </li>
                                    </ul>
                                )
                            })}

                        </div>
                    </div>

                    2nd
                    <div className={`${style.pricing__account} ${style["pricing__account--premium"]}`}>
                        <div
                            className={toggleState === 1 ? `{style["pricing__account--premium"]}` : "content"}
                        >
                            <div className={style.pricing__account__header}>
                                <h3 className={style.pricing__account__tier}>{premiumData.title}</h3>

                                <div className={style.pricing__account__price}>
                                    ₹
                                    <span>{premiumData.price}</span>
                                    <span className={style.pricing__account__price__resume}>{premiumData.month}</span>
                                </div>
                            </div>

                            <div className={style.pricing__account__action}>
                                <button className={style["btn--orange"]}>{premiumData.button}</button>
                            </div>

                            <div className={style.pricing__account__body}>
                                <p>{premiumData.label}</p>

                                {premiumListData && premiumListData.map((item) => {
                                    const { id, data } = item;
                                    return (
                                        <ul className={style.listCheck} key={id}>
                                            <li className={style.listCheck__item}>
                                                <i className="fa-solid fa-check" />
                                                {data}
                                            </li>
                                        </ul>
                                    )
                                })}

                            </div>
                        </div>

                        <div
                            className={toggleState === 2 ? `{style["pricing__account--premium"]}` : "content"}
                        >
                            <div className={style.pricing__account__header}>
                                <h3 className={style.pricing__account__tier}>{premiumData.title}</h3>

                                <div className={style.pricing__account__price}>
                                    ₹
                                    <span>{premiumData.yearPrice}</span>
                                    <span className={style.pricing__account__price__resume}>{premiumData.month}</span>
                                </div>

                                <p className={style.small}>
                                    {premiumData.small}
                                    <br />
                                    {premiumData.smallData} <strong>{premiumData.strong}</strong>
                                </p>
                            </div>

                            <div className={style.pricing__account__action}>
                                <button className={style["btn--orange"]}>{premiumData.button}</button>
                            </div>

                            <div className={style.pricing__account__body}>
                                <p>{premiumData.label}</p>

                                {premiumListData && premiumListData.map((item) => {
                                    const { id, data } = item;
                                    return (
                                        <ul className={style.listCheck} key={id}>
                                            <li className={style.listCheck__item}>
                                                <i className="fa-solid fa-check" />
                                                {data}
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    3rd
                    <div className={`${style.pricing__account}`}>
                        <div className={style.pricing__account__header}>
                            <h3 className={style.pricing__account__tier}>
                                {businessData.title}
                            </h3>

                            <div className={style.pricing__account__price}>
                                <div className={style.pricing__account__price__resume}>
                                    <strong>{businessData.price}</strong>
                                </div>
                            </div>

                            <p>{businessData.desc}</p>
                        </div>

                        <div className={style.pricing__account__action}>
                            <button className={style["btn--white"]}>{businessData.button}</button>
                        </div>

                        <div className={style.pricing__account__body}>
                            <p>{businessData.label}</p>

                            {businessListData && businessListData.map((item) => {
                                const { id, data } = item;
                                return (
                                    <ul className={style.listCheck} key={id}>
                                        <li className={style.listCheck__item}>
                                            <i className="fa-solid fa-check" />
                                            {data}
                                        </li>
                                    </ul>
                                )
                            })}

                        </div>
                    </div>

                </div> */}
            </div>

            {/* <Container>
                <div className={`${style.block} ${style["block--grey-admin"]}`}>
                    <Container>
                        <div className={style.block__header}>
                            <Typography variant="h4">
                                The security of your data is our priority
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{ color: "#383e45", fontSize: "20px" }}
                            >
                                In addition to data encryption in transit and at rest, we operate in compliance with industry-accepted standards, regulations, and certifications. Learn more about security
                            </Typography>
                        </div>
                    </Container>
                </div>

                <div className={`${style.block} ${style["block--grey-light"]}`}>
                    <div className={style.block__header}>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h4">
                                Frequently Asked Questions
                            </Typography>
                        </ThemeProvider>

                        <ThemeProvider theme={theme}>
                            <Typography variant="body1">
                                Our support team answers these questions almost daily
                            </Typography>
                        </ThemeProvider>
                    </div>
                </div>
            </Container> */}
        </div>
    )
}

export default Pricing;