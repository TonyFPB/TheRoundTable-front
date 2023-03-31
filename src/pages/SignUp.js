import { useState } from "react"
import styled from "styled-components"
import Input from "../components/Form/Input"
import dice from "../assets/images/dice.png"
import Button from "../components/Form/Button"

import swal from "sweetalert2"
import { toast } from "react-toastify"
import { saveSignUp } from "../services/signUpApi"
import { Link } from "react-router-dom"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  async function sign(e){
    e.preventDefault();
    if(password !== confirmPassword){
      return toast.error("As senhas precisam ser iguais.", {style:{background:"#FFE4A4"}})
    }
    try{
      await saveSignUp({name, email, password, confirmPassword})
      toast("Cadastro feito com sucesso!", {style:{background:"#FFE4A4"}})
    }catch (err) {
      console.log(err)
      if(err.response.status === 400){
        return toast.error("Preencha os dados corretamente.", {style:{background:"#FFE4A4"}})
      }if(err.response.status === 409){
        return toast.error("Nome ou email ja estão sendo utilizados.", {style:{background:"#FFE4A4"}})
      }
    }
  }

  return (
    <StyledSignUp>
      <img src={dice} />
      <Tittle>The Round Table</Tittle>
      <StyledForm onSubmit={sign}>
        <Input name="name" type="text" label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <Input name="email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input name="password" type="password" label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input name="confirmPassword" type="password" label="Confirme sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <Button type="submit">Cadastre-se</Button>
      </StyledForm>
      <Link to={"/"}>Já tem um cadastro?</Link>
    </StyledSignUp>
  )
}

const StyledSignUp = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100vh;
  display: flex;
  img {
    width: 300px;
  }
  a {
    margin: 10px 0 0 0;
    color:#000000;
    font-family: 'Playfair Display', serif;
    font-weight:700;
    font-size:20px;
  }
`
const StyledForm = styled.form`
  display: flex;
  flex-direction:column;
  width: 300px;
`

const Tittle = styled.h1`
  font-family: 'Cinzel', serif;
  font-weight:700;
  font-size:40px;
`
