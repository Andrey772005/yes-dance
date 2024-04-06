import {Button} from "./styles.js";

const NavButton = ({children, style, to, type}) => {
  return (
      <Button type={"button"} style={style} to={to}>
        {children}
      </Button>
  )
}

export default NavButton