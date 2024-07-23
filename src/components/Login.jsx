import { useState } from "react";
import { logandoUsuarios } from "../api_barbearia/api_barbearia";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
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
    console.log(formData);
    await logandoUsuarios(formData);
    setFormData({
      email: "",
      senha: ""
    });
    navigate('/agendar');
  }

  return (
    <>
      <Helmet>
        <title>Login - Barbearia do Tim</title>
      </Helmet>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" style={{ height: "100vh" }}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://logowik.com/content/uploads/images/barber-shop3084.logowik.com.webp"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Faça login com a sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Endereço de Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
                <div className="text-sm">
  <a href="#" className="font-semibold text-gray-600 hover:text-gray-800">
    Esqueceu sua senha?
  </a>
</div>
              </div>
              <div className="mt-2">
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.senha}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
