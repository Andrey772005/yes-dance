import { Navigation } from "./styles";
import { MainNavigationButton } from "../../ui/main-navigation-button/navigation-button";

export default function MainNav() {
  return (
    <Navigation>
      <MainNavigationButton role={"button"} text={"О студии"}/>
    </Navigation>
  )
}