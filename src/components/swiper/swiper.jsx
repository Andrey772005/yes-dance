import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import MainSlide from '../../assets/main1x.png'
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

export default function SwiperSlider() {
  return (
    <>
      <Swiper pagination={true} modules={[Autoplay, Pagination]} autoplay={{delay: 3000, disableOnInteraction: false,}} className="mySwiper">
        <SwiperSlide>
          <img src={MainSlide} alt="yes dance"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MainSlide} alt="yes dance"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MainSlide} alt="yes dance"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MainSlide} alt="yes dance"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MainSlide} alt="yes dance"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
