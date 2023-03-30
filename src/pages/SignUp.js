import { useState } from "react"
import styled from "styled-components"
import Input from "../components/Form/Input"

export default function SignUp() {
  const [teste, setTeste] = useState("")
  return (
    <StyledSignUp>
       <Input label="To testando aqui"  value={teste} onChange={(e)=> setTeste(e.target.value)}/>
    </StyledSignUp>
  )
}

const StyledSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 250px;
`