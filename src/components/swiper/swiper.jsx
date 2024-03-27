import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';
import MainSlide from '../../assets/main1x.png'
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

export default function SwiperSlider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={MainSlide} alt="yes dance"></img>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
}
