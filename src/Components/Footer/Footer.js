import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFooterApi } from "../../Redux/Action/Footer/FooterAction";
import Skeleton from "react-loading-skeleton";
import style from "./Footer.module.css";

const Footer = () => {
  const dispatch = useDispatch();
  const footerData = useSelector((state) => state.footerReducer.footerData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getFooterApi())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={style["footer-main"]}>
        <Container>
          <Grid container spacing={3}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Typography variant="h6" className={style.heading}>
                  <Box
                    className={style["skeleton-box"]}
                    sx={{
                      width: "20%",
                    }}
                  >
                    <Skeleton height={20} />
                  </Box>
                </Typography>
                <ul>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <li key={index}>
                      <Box
                        className={style["skeleton-box"]}
                        sx={{
                          width: "40%",
                        }}
                      >
                        <Skeleton height={20} />
                      </Box>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>

          <ul className={style.app__store}>
            <li>
              <Box
                className={style["skeleton-box"]}
                sx={{
                  width: "100px",
                }}
              >
                <Skeleton height={40} />
              </Box>
            </li>
            <li>
              <Box
                className={style["skeleton-box"]}
                sx={{
                  width: "100px",
                }}
              >
                <Skeleton height={40} />
              </Box>
            </li>
          </ul>

          <div className={style.separator}></div>

          <div className={style.row}>
            <div className={style.social__icon}>
              <div className={style["footer-main__info"]}>
                <div className={style.slogan}>
                  <Box
                    className={style["skeleton-box"]}
                    sx={{
                      width: "200px",
                    }}
                  >
                    <Skeleton height={20} />
                  </Box>
                </div>
                <div className="social">
                  <Box
                    className={style["skeleton-box"]}
                    sx={{
                      width: "30%",
                    }}
                  >
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Skeleton
                        key={index}
                        circle={true}
                        height={30}
                        width={30}
                        style={{ marginRight: "10px" }}
                      />
                    ))}
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className={style["footer-main"]}>
      {footerData ? (
        <Container>
          <Grid container spacing={3}>
            {[
              { title: footerData.pdfLover, links: footerData.pdfLoverLink },
              { title: footerData.product, links: footerData.productLink },
              { title: footerData.solution, links: footerData.solutionLink },
              { title: footerData.company, links: footerData.companyLink },
            ].map((section, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <h6
                  className={style.heading}
                >
                  {section.title}
                </h6>
                <ul>
                  {section.links.map((item) => (
                    <li key={item.id}>
                      <Link>
                        <p
                          className={style.subHeading}
                        >
                          {item.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>

          <ul className={style.app__store}>
            <li>
              <Link to="/" title="Google Play">
                <img
                  src={footerData.googleDrive}
                  alt="Google Play"
                  width={100}
                  height={30}
                />
              </Link>
            </li>
            <li>
              <Link to="/" title="App Store">
                <img
                  src={footerData.appStore}
                  alt="App Store"
                  width={100}
                  height={30}
                />
              </Link>
            </li>
          </ul>

          <div className={style.separator}></div>

          <div className={style.row}>
            <div className={style.social__icon}>
              <div className={style["footer-main__info"]}>
                <div className={style.slogan}>
                  <p>{footerData.copyRightText}</p>
                </div>
                <div className="social">
                  {[
                    {
                      title: "Follow us on Twitter!",
                      icon: footerData.twitter,
                    },
                    {
                      title: "Like us on Facebook!",
                      icon: footerData.facebook,
                    },
                    {
                      title: "LinkedIn-PDFLover",
                      icon: footerData.linkedin,
                    },
                    {
                      title: "Instagram-PDFLover_official",
                      icon: footerData.instagram,
                    },
                  ].map((social, index) => (
                    <Link
                      to=""
                      rel="noopener"
                      target="_blank"
                      title={social.title}
                      key={index}
                    >
                      {social.icon && (
                        <img
                          className={`${style.social__item}`}
                          src={social.icon}
                          alt={social.title}
                          width={100}
                          height={30}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div>Error occurred while fetching data.</div>
      )}
    </div>
  );
};

export default Footer;