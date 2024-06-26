/* eslint-disable react/prop-types */
import {Button} from "./styles.js";

const NavButton = ({children, style, to, role, ...props}) => {
  return (
      <Button role={role} style={style} to={to}>
        {children}
      </Button>
  )
}

export default NavButton