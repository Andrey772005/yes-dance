import { Navigation } from "./styles";
import {MainButton, DirectionsButton} from '../../ui/main-navigation-button/styles'

export default function MainNav() {
  return (
    <Navigation>
      <MainButton role={"button"}>
        О студии
      </MainButton>
      <DirectionsButton/>
    </Navigation>
  )
}