import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

import Input from "../../components/Form/Input"
import dice from "../../assets/images/dice.png"
import Button from "../../components/Form/Button"
import { Tittle, StyledSign, StyledForm } from "./StylesSign"
import { saveLogin } from "../../services/signApi"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function login(e) {
    setLoading(true);
    e.preventDefault();
    try{
      const user = await saveLogin({email, password});
      localStorage.setItem("user", JSON.stringify(user));
      setLoading(false);
    }catch(err) {
      toast.error("Email ou senha estão incorretos.", {style:{background:"#FFE4A4"}});
      setLoading(false);
    }
    
  }

  return (
    <StyledSign>
      <img src={dice} alt="Imagem de um dado"/>
      <Tittle>The Round Table</Tittle>
      <StyledForm onSubmit={login}>
        <Input name="email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input name="password" type="password" label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button disabled={loading} type="submit">Entrar</Button>
      </StyledForm>
      <Link to={"/sign-up"}>Não tem cadastro?</Link>
    </StyledSign>

  );
}