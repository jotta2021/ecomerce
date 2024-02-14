import React from "react";
import Back from "./../../assets/back.jpg";
import * as C from "./styles.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import Slide3 from "../../assets/slide3.jpg";
import 'swiper/css'; // Importe os estilos CSS do Swiper
const banners = [
    {
        id: 1,
        image: Slide1,
    },
  {
    id: 2,
    image: Slide2,
  },
  {
    id: 3,
    image: Slide3,
  },
];

export default function Slider() {
  return (
    <C.Container>
        
      <Swiper 
      slidesPerView={1} 
      pagination={{ clickable: true }}
       navigation>
        {banners.map((item) => (
          <SwiperSlide key={item.id}>

                <img src={item.image} alt="slider" />
<h1>.</h1>
            
          </SwiperSlide>
        ))}
      </Swiper>
   
    </C.Container>
  );
}
