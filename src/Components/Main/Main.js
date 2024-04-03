import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import style from "./Main.module.css";

const SkeletonCard = () => (
  <Card variant="outlined" className={style.card__item}>
    <CardContent sx={{ padding: 0 }}>
      <div className={style.tools__item__icon}>
        <Box
          className={style["skeleton-box"]}
          sx={{
            width: "20%",
          }}
        >
          <Skeleton height={150} width={150} />
        </Box>
      </div>
      <Box
        className={style["skeleton-box"]}
        sx={{
          width: "40%",
        }}
      >
        <Skeleton height={30} width={200} />
      </Box>
      <Box
        className={style["skeleton-box"]}
        sx={{
          width: "90%",
        }}
      >
        <Skeleton count={2} height={20} />
      </Box>
    </CardContent>
  </Card>
);

const Main = () => {
  // For PDF Types
  const [detailsData, setDetailsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_JSON_URL}/homepage`);
      const data = await response.json();

      setDetailsData(data.details);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Grid
        container
        spacing={4}
        className={style.gridStyle}
        justifyContent="center"
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ minWidth: 270 }}>
                <SkeletonCard />
              </Box>
            </Grid>
          ))
          : detailsData &&
          detailsData.map((item) => {
            const { id, title, description, link, img } = item;
            return (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Link to={link}>
                  <Box sx={{ minWidth: 270 }}>
                    <Card variant="outlined" className={style.card__item}>
                      <CardContent sx={{ padding: 0 }}>
                        <div className={style.tools__item__icon}>
                          <img src={img} alt={title} width={50} height={50} />
                        </div>

                        <h3 className={style.tools__text}>
                          {title}
                        </h3>

                        <p>{description}</p>
                      </CardContent>
                    </Card>
                  </Box>
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Main;
