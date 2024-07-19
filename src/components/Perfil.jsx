import React, { useState, useEffect } from 'react';
import { obterPerfilUsuario, atualizarPerfilUsuario, obterFuncionarios } from '../api_barbearia/api_barbearia';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function Perfil() {
  const [user, setUser] = useState({
    nome: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate()
  
  const getData = async () => {
    try {
      const data = await obterPerfilUsuario();
      setUser(data);
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
    } else {
      getData(); 
    }
  }, [navigate]); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      await atualizarPerfilUsuario({ nome: user.nome });
      console.log('Dados enviados para atualização:', { nome: user.nome }); 
      setIsEditing(false);
      await getData();
      console.log(user)
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário:", error);
    }
  };

  return (
    <div>
        <Helmet>
            <title>  Meu Perfil - Barbearia do Tim</title>
            </Helmet>
      <h1>Meu Perfil</h1>
      {isEditing ? (
        <div style={{ fontSize: "50px" }}>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={user.nome}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSave}>Salvar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <div style={{ fontSize: "50px" }}>
          <p>Nome: {user.nome}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </div>
      )}
    </div>
  );
}
