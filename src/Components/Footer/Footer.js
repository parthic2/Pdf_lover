import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Typography } from "@mui/material";

import style from "./Footer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFooterApi } from "../../Redux/Action/Footer/FooterAction";

const Footer = () => {
  // For Redux
  const dispatch = useDispatch();

  const footerData = useSelector((state) => state.footerReducer.footerData);
  // console.log(footerData);

  const pdfLoverLink = useSelector(
    (state) => state.footerReducer.footerData.pdfLoverLink
  );
  const productLink = useSelector(
    (state) => state.footerReducer.footerData.productLink
  );
  const solutionLink = useSelector(
    (state) => state.footerReducer.footerData.solutionLink
  );
  const companyLink = useSelector(
    (state) => state.footerReducer.footerData.companyLink
  );

  useEffect(() => {
    dispatch(getFooterApi());
  }, [dispatch]);

  return (
    <>
      {footerData && (
        <div className={style["footer-main"]}>
          <Container>
            {/* Footer  */}
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography
                    variant="h6"
                    className={style.heading}
                    sx={{ margin: "15px" }}>
                    {footerData.pdfLover}
                  </Typography>{" "}
                  {pdfLoverLink &&
                    pdfLoverLink.map((item) => {
                      const { id, title, link } = item;
                      return (
                        <Link key={id} to={link}>
                          <li>
                            <Typography
                              variant="subtitle1"
                              className={style.subHeading}
                              sx={{ margin: "15px" }}>
                              {title}
                            </Typography>
                          </li>
                        </Link>
                      );
                    })}
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography
                    variant="h6"
                    className={style.heading}
                    sx={{ margin: "15px" }}>
                    {footerData.product}
                  </Typography>
                  {productLink &&
                    productLink.map((item) => {
                      const { id, title, link } = item;
                      return (
                        <Link key={id} to={link}>
                          <li>
                            <Typography
                              variant="subtitle1"
                              className={style.subHeading}
                              sx={{ margin: "15px" }}>
                              {title}
                            </Typography>
                          </li>
                        </Link>
                      );
                    })}
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography
                    variant="h6"
                    className={style.heading}
                    sx={{ margin: "15px" }}>
                    {footerData.solution}
                  </Typography>
                  {solutionLink &&
                    solutionLink.map((item) => {
                      const { id, title, link } = item;
                      return (
                        <Link key={id} to={link}>
                          <li>
                            <Typography
                              variant="subtitle1"
                              className={style.subHeading}
                              sx={{ margin: "15px" }}>
                              {title}
                            </Typography>
                          </li>
                        </Link>
                      );
                    })}
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography
                    variant="h6"
                    className={style.heading}
                    sx={{ margin: "15px" }}>
                    {footerData.company}
                  </Typography>
                  {companyLink &&
                    companyLink.map((item) => {
                      const { id, title, link } = item;
                      return (
                        <Link key={id} to={link}>
                          <li>
                            <Typography
                              variant="subtitle1"
                              className={style.subHeading}
                              sx={{ margin: "15px" }}>
                              {title}
                            </Typography>
                          </li>
                        </Link>
                      );
                    })}
                </Grid>
              </Grid>
            </Container>

            {/* Download Link  */}
            <ul className={style.app__store}>
              <li>
                <Link
                  to=""
                  rel="noopener "
                  target="_blank "
                  title="Google Play">
                  <img
                    src={footerData.googleDrive}
                    alt="Google Play"
                    style={{ width: "135px" }}
                  />
                </Link>
              </li>
              <li>
                <Link to="" rel="noopener " target="_blank " title="App Store">
                  <img
                    src={footerData.appStore}
                    alt="App Store"
                    style={{ width: "135px", paddingTop: "6px" }}
                  />
                </Link>
              </li>
            </ul>

            {/* For HR Line  */}
            <div className={style.separator}></div>

            {/* Social list  */}
            <div className={style.row}>
              <div className={style.social__icon}>
                <div className={style["footer-main__info"]}>
                  <div className={style.slogan}>
                    <p>{footerData.copyRightText}</p>
                  </div>
                  <div className="social">
                    <Link
                      to=""
                      rel="noopener "
                      target="_blank "
                      title="Follow us on Twitter!">
                      <img
                        className={`${style.social__item}`}
                        src={footerData.twitter}
                        alt="twitter"
                      />
                    </Link>
                    <Link
                      to=""
                      rel="noopener "
                      target="_blank "
                      title="Like us on Facebook!">
                      <img
                        className={`${style.social__item}`}
                        src={footerData.facebook}
                        alt="facebook"
                      />
                    </Link>
                    <Link
                      to=""
                      rel="noopener "
                      target="_blank "
                      title="LinkedIn-PDFLover">
                      <img
                        className={`${style.social__item}`}
                        src={footerData.linkedin}
                        alt="linkedin"
                      />
                    </Link>
                    <Link
                      to=""
                      rel="noopener "
                      target="_blank "
                      title="Instagram-PDFLover_official">
                      <img
                        className={`${style.social__item}`}
                        src={footerData.instagram}
                        alt="instagram"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Footer;
