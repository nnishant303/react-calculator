import Input from "./Input"
import Container from "./Container";
import Button from "./Button";
import { useState } from "react";

const App = ()=>{

  const keys  = [
    "C",
    "(",
    ")",
    "+",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "*",
    "3",
    "2",
    "1",
    "/",
    ".",
    "0",
    "DEL",
    "=",
  ]

  const [display , SetDisplay] = useState("")
  return <center>
  
  <Container>
    <Input display = {display}/>
    <Button keys = {keys} SetDisplay = {SetDisplay} />
  </Container>
  </center>
}

export default App;