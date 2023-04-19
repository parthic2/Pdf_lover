import { Container, Grid, Paper, ThemeProvider, Typography, createTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLegalApi } from '../../../Redux/Action/DetailsPages/LegalAction';

import style from "./LegalPrivacy.module.css";
import ModalBox from '../Popup/Modal';

const LegalPrivacy = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Legal information of PDFLover"
  }, []);

  // For Redux
  const dispatch = useDispatch();

  const legalData = useSelector((state) => state.legalReducer.legalData);
  // console.log(legalData);

  const security = useSelector((state) => state.legalReducer.legalData.security);
  const privacy = useSelector((state) => state.legalReducer.legalData.privacy);
  const terms = useSelector((state) => state.legalReducer.legalData.terms);
  const cookie = useSelector((state) => state.legalReducer.legalData.cookie);

  useEffect(() => {
    dispatch(getLegalApi());
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

  // For Modal
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div className={`${style.block} ${style["block--white"]}`}>
      <div className={style.block__header}>
        {legalData && (
          <ThemeProvider theme={theme}>
            <Typography variant="h5">
              {legalData.heading}
            </Typography>
          </ThemeProvider>
        )}
      </div>

      <div className={style["block__body"]}>
        <Container>
          <Grid container spacing={2}>
            {security && (
              <Grid item xs={12} sm={6} md={3} onClick={handleOpen}>
                <Paper className={style.info__card}>
                  <div className={style.infoCard__icon}>
                    <img src="" alt={security.title} />
                  </div>
                  <div className={style.infoCard__title}>{security.title}</div>

                  <div className={style.infoCard__body}>
                    {security.desc}
                  </div>

                  <div className={style.infoCard__footer}>
                    <div className={style.infoCard__footer__content}>
                      {security.button}
                    </div>
                  </div>
                </Paper>
              </Grid>
            )}
            <ModalBox isOpen={isOpen} handleClose={handleClose} />

            {privacy && (
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={style.info__card}>
                  <div className={style.infoCard__icon}>
                    <img src="" alt={privacy.title} />
                  </div>
                  <div className={style.infoCard__title}>{privacy.title}</div>

                  <div className={style.infoCard__body}>
                    {privacy.desc}
                  </div>

                  <div className={style.infoCard__footer}>
                    <div className={style.infoCard__footer__content}>
                      {privacy.button}
                    </div>
                  </div>
                </Paper>
              </Grid>
            )}

            {terms && (
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={style.info__card}>
                  <div className={style.infoCard__icon}>
                    <img src="" alt={terms.title} />
                  </div>
                  <div className={style.infoCard__title}>{terms.title}</div>

                  <div className={style.infoCard__body}>
                    {terms.desc}
                  </div>

                  <div className={style.infoCard__footer}>
                    <div className={style.infoCard__footer__content}>
                      {terms.button}
                    </div>
                  </div>
                </Paper>
              </Grid>
            )}

            {cookie && (
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={style.info__card}>
                  <div className={style.infoCard__icon}>
                    <img src="" alt={cookie.title} />
                  </div>
                  <div className={style.infoCard__title}>{cookie.title}</div>

                  <div className={style.infoCard__body}>
                    {cookie.desc}
                  </div>

                  <div className={style.infoCard__footer}>
                    <div className={style.infoCard__footer__content}>
                      {cookie.button}
                    </div>
                  </div>
                </Paper>
              </Grid>
            )}

          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default LegalPrivacy;