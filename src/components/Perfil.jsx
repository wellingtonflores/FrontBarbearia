import React, { useState, useEffect } from 'react';
import { obterPerfilUsuario, atualizarPerfilUsuario } from '../api_barbearia/api_barbearia';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function Perfil() {
  const [user, setUser] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    senha: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  
  const getData = async () => {
    try {
      const data = await obterPerfilUsuario();
      setUser(data);
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      await atualizarPerfilUsuario({
        nome: user.nome,
      });
      await getData();
      setIsEditing(false);
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário:", error); 
    }
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); 
      } else {
        await getData(); 
      }
    })();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Meu Perfil - Barbearia do Tim</title>
      </Helmet>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Meu Perfil</h2>
        </div>
        {isEditing ? (
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={user.nome}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nome da pessoa"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  disabled
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email da pessoa"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">Whatsapp</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="text"
                  value={user.whatsapp}
                  onChange={handleChange}
                  disabled
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Whatsapp"
                />
              </div>
              <div>
                <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  value={user.senha}
                  onChange={handleChange}
                  disabled
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Senha"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="group relative w-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="group relative w-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Salvar
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={user.nome}
                  disabled
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  disabled
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">Whatsapp</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="text"
                  value={user.whatsapp}
                  disabled
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  value="dwadwaoidjawoidwajdwoa"
                  disabled
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="group relative w-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Editar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
