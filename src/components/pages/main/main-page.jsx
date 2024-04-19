import {MainPage} from "./styles.js";
import SwiperSlider from "../../swiper/swiper.jsx";
import { StyledSection } from "../../../styled/section/section.jsx";
import MainNav from "../../layout/main-nav/main-nav.jsx";
import { SocialSection } from "../../layout/social/social-section.jsx";


export default function Main() {
  return (
    <MainPage>
      <SwiperSlider/>
      <StyledSection/>
      <MainNav/>
      <SocialSection/>
    </MainPage>
  )
}
