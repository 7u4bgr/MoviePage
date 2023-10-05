import React, { useState } from "react";
import styles from "./index.module.css";
import Title from "../UI/title";
import Wrapper from "../UI/wrapper";
import Card from "../card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper/modules";

const Films = ({ title }) => {
  const [data,setData]=useState([
    {
      image:'https://images-dizipal621-com.cdn.ampproject.org/i/s/images.dizipal621.com/images/movie/poster/344/516/100/b47b8ee788k7kk8a1162b07a5.jpg?v=3.5',
      name:'Masiemah',
      skor:6.5,
      date:'2015 December'
    },
    {
      image:'https://images-dizipal621-com.cdn.ampproject.org/i/s/images.dizipal621.com/images/movie/poster/344/516/100/b47b8ee7qk5o8kpa1162b07a5.jpg?v=3.5',
      name:'Nowhere',
      skor:7.1,
      date:'2023 Mai'
    },
    {
      image:'https://images-dizipal621-com.cdn.ampproject.org/i/s/images.dizipal621.com/images/movie/poster/344/516/100/b47b8ee7u58oqq5a1162b07a5.jpg?v=3.5',
      name:'Corner Office',
      skor:6.8,
      date:"2023 Januar"
    },
    {
      image:'https://images-dizipal621-com.cdn.ampproject.org/i/s/images.dizipal621.com/images/movie/poster/344/516/100/b47b8eep5v5owqpa1162b07a5.jpg?v=3.5',
      name:'Untold',
      skor:7.1,
      date:"2023 April"
    },
    {
      image:'https://images-dizipal621-com.cdn.ampproject.org/i/s/images.dizipal621.com/images/movie/poster/344/516/100/b47b8eep87upkupa1162b07a5.jpg?v=3.5',
      name:'The Deepest Breath',
      skor:4.6,
      date:"2021 Marth"
    },
    {
      image:'https://images-dizipal621-com.cdn.ampproject.org/i/s/images.dizipal621.com/images/movie/poster/344/516/100/b47b8eep5kwq8wka1162b07a5.jpg?v=3.5',
      name:'Codi Ciada',
      skor:3.5,
      date:"2022 Juli"
    },
    {
      image:'https://images-dizipal621-com.cdn.ampproject.org/i/s/images.dizipal621.com/images/movie/poster/344/516/100/b47b8eep8v5uov5a1162b07a5.jpg?v=3.5',
      name:'The Black Book',
      skor:5,
      date:"2019 September"
    },
    {
      image:'https://images-dizipal621-com.cdn.ampproject.org/i/s/images.dizipal621.com/images/movie/poster/344/516/100/b47b8ee8owvk85a1162b07a5.jpg?v=3.5',
      name:'Till',
      skor:7.2,
      date:'2017 Mai'
    },
    {
      image:'https://images-dizipal621-com.cdn.ampproject.org/i/s/images.dizipal621.com/images/movie/poster/344/516/100/b47b8ee7q8k85owa1162b07a5.jpg?v=3.5',
      name:'Brother',
      skor:9.2,
      date:'2023 September'
    },
  ])
  return (
    <div className={styles.background}>
      <Wrapper className={styles.wrappername}>
        <Title>{title}</Title>

        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.swiper}
          breakpoints={{
            0:{
              spaceBetween:24,
              slidesPerView:2.8,
            },
            992:{
              spaceBetween:24,
              slidesPerView:5.5,
            },
          }}
          >
          {data.map((item)=>(
          <SwiperSlide>
            <div className={styles.div}>
              <div className={styles.header}></div>
              <div className={styles.control}>
                <Card films={item}/>
              </div>
            </div>
          </SwiperSlide>
            ))};
            
        </Swiper>
      </Wrapper>
    </div>
  );
};

export default Films;
