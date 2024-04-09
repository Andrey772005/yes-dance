import { Navigation } from "./styles";
import { AboutButton, NavigationButton} from '../../ui/main-navigation-button/styles'

export default function MainNav() {
  return (
    <Navigation>
      <AboutButton role={"button"}>
        О студии
      </AboutButton>
      <NavigationButton role={"button"}>
        Направления
      </NavigationButton>
      <NavigationButton style={{gridColumn: 2 / 3, gridRow: 2 / 3}}>
        Преподаватели
      </NavigationButton>
    </Navigation>
  )
}