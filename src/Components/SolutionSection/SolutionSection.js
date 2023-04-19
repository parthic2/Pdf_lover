import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SolutionSection.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getSolutionApi } from "../../Redux/Action/HomePage/SolutionSectionAction";

export default function Slider() {
  const dispatch = useDispatch();

  const solutionData = useSelector(
    (state) => state.SolutionSliderReducer.solutionData
  );
  // console.log(solutionData);

  useEffect(() => {
    dispatch(getSolutionApi());
  }, [dispatch]);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        {solutionData &&
          solutionData.map((item) => {
            const { id, heading, description, img } = item;
            return (
              <SwiperSlide key={id}>
                <div className="card">
                  <img src={img} alt={heading} />

                  <div>
                    <Typography variant="h5" className="title__padding">
                      {heading}
                    </Typography>

                    <Box height={10} />

                    <Typography className="carousel-item-text">
                      {description}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
