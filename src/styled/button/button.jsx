import React from "react";
import {Button} from "./styles.js";

export default function NavButton({children}) {
  return (
    <Button type={"button"}>
      {children}
    </Button>
  )
}
