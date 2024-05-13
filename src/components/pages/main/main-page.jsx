import { MainPage } from "./styles.js";
import SwiperSlider from "../../swiper/swiper.jsx";
import { StyledSection } from "../../../styled/section/section.jsx";
import MainNav from "../../layout/main-nav/main-nav.jsx";
import { SocialSection } from "../../layout/social/social-section.jsx";
import { MainFooter } from "../../layout/footer/footer.jsx";
import { UserNav } from "../../layout/nav/nav.jsx"


export default function Main() {
  return (
    <MainPage>
      <UserNav/>
      <SwiperSlider/>
      <StyledSection/>
      <MainNav/>
      <SocialSection/>
      <MainFooter/>
    </MainPage>
  )
}
