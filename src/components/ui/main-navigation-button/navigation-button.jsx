import { MainButton } from "./styles";

export function MainNavigationButton({text, role, style, children}) {
  return (
    <MainButton role={role} style={style}>
      {text}
    </MainButton>

  )
}