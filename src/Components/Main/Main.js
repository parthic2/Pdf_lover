import React, { useEffect } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";

import style from "./Main.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getDetailsApi } from "../../Redux/Action/HomePage/DetailsTypesAction";

const Main = () => {
  // For PDF Types
  const dispatch = useDispatch();

  const detailsData = useSelector((state) => state.detailsReducer.detailsData);
  // console.log(detailsData);

  useEffect(() => {
    dispatch(getDetailsApi());
  }, [dispatch]);

  return (
    <div className={style.main}>
      <Container>
        <Grid
          container
          spacing={4}
          className={style.gridStyle}
          justifyContent="center">
          {detailsData &&
            detailsData.map((item) => {
              const { id, title, description, link, img } = item;
              return (
                <Grid item xs={12} sm={6} md={4} key={id}>
                  <Link to={link}>
                    <Box sx={{ minWidth: 270 }}>
                      <Card variant="outlined" className={style.card__item}>
                        <React.Fragment>
                          <CardContent sx={{ padding: 0 }}>
                            <div className={style.tools__item__icon}>
                              <img src={img} alt={title} />
                            </div>

                            <Typography sx={{ fontSize: 20 }} gutterBottom>
                              {title}
                            </Typography>

                            <p>
                              {description}
                            </p>
                          </CardContent>
                        </React.Fragment>
                      </Card>
                    </Box>
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
