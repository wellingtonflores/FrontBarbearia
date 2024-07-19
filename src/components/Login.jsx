import { useState } from "react";
import {logandoUsuarios, obterPerfilUsuario} from "../api_barbearia/api_barbearia";
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    senha: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await logandoUsuarios(formData);
    setFormData({
        email: "",
        senha: ""
    })
    navigate('/perfil')
  }

  return (
    <div style={{height: "50vh"}}>
        <Helmet>
            <title>  Login - Barbearia do Tim</title>
            </Helmet>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", margin: "25px"}}>
    
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />

        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" id="senha" onChange={handleChange} value={formData.senha} />
        
        <button type="submit" onClick={(obterPerfilUsuario)}>Logar</button>
      </form>
    </div>
  );
}
