import { useState } from "react";
import {registrandoUsuarios} from "../api_barbearia/api_barbearia";
import {Helmet} from "react-helmet";

export default function Registro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
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
    await registrandoUsuarios(formData);
    setFormData({
        nome: "",
        email: "",
        whatsapp: "",
        senha: ""
    })
  }

  return (
    <div style={{height: "50vh", border:"1px solid black"}}>
        <Helmet>
            <title>  Registro - Barbearia do Tim</title>
            </Helmet>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column",  border:"1px solid black", width: "350px", height: '25vh', fontSize:"25px"}}>
        <label htmlFor="nome">Nome Completo</label>
        <input type="text" name="nome" id="nome" onChange={handleChange} value={formData.nome} />
        
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />
        
        <label htmlFor="whatsapp">Whatsapp</label>
        <input type="tel" name="whatsapp" id="whatsapp" placeholder='000000-0000' maxLength="11" onChange={handleChange} value={formData.whatsapp} />
        
        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" id="senha" onChange={handleChange} value={formData.senha} />
        
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
}
