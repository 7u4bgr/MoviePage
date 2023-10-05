import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Title from "../UI/title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideCard from "../slideCard";
import { FreeMode, Zoom } from "swiper/modules";
const Latest = (props) => {
  const [latest,setLatest]=useState([
    {
      image:'https://img1.wallspic.com/crops/7/9/1/2/4/142197/142197-group_of_people_standing_near_brown_brick_wall-1920x1080.jpg',
      name:"Game of Thrones"
    },
    {
      image:'https://e0.pxfuel.com/wallpapers/989/36/desktop-wallpaper-cute-harry-potter-16-9-harry-potter.jpg',
      name:"Harry Potter"
    },
    {
      image:'https://assets.gqindia.com/photos/5cdc5de86b46cace92597ad9/16:9/w_2560%2Cc_limit/Peeky-Blinders-Movie-Trailer.jpg',
      name:"Peaky Blinders"
    },
    {
      image:'https://wallpapers.net/web/wallpapers/godfather-marlon-brando-hd-wallpaper/thumbnail/lg.jpg',
      name:"The GodFather"
    },
    {
      image:'https://e0.pxfuel.com/wallpapers/698/901/desktop-wallpaper-batman-pc-16-9.jpg',
      name:"Batman"
    },
    {
      image:'https://wallpaperswide.com/download/hacker_glitch-wallpaper-2400x1350.jpg',
      name:"The Hacker"
    },
  ])
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.texth2}>
          <Title>Latest Trailers</Title>
        </div>
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
               slidesPerView:1.2,
             },
             992:{
               spaceBetween:24,
               slidesPerView:2.2,
             },
           }}
        >
          {latest.map((item)=>(

          <SwiperSlide>
            <div className={styles.div}>
              <div className={styles.control}>
                <SlideCard data={item}/>
              </div>
            </div>
          </SwiperSlide>
          ))}

        
        </Swiper>
      </Wrapper>
    </div>
  );
};

export default Latest;
