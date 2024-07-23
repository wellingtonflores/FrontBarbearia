import { useState } from "react";
import { registrandoUsuarios } from "../api_barbearia/api_barbearia";
import { Helmet } from "react-helmet";

export default function Registro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    senha: ""
  });

  const checkPasswordStrength = (password) => {
    return {
      minLength: password.length >= 8,
      lowerCase: /[a-z]/.test(password),
      upperCase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*()_+]/.test(password)
    };
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await registrandoUsuarios(formData);
    setFormData({
      nome: "",
      email: "",
      whatsapp: "",
      senha: ""
    });
  };

  const passwordStrength = checkPasswordStrength(formData.senha);

  return (
    <>
      <Helmet>
        <title>Registro - Barbearia do Tim</title>
      </Helmet>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" style={{ height: "100vh" }}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://logowik.com/content/uploads/images/barber-shop3084.logowik.com.webp"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crie a sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                Nome Completo
              </label>
              <div className="mt-2">
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.nome}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
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
              <label htmlFor="whatsapp" className="block text-sm font-medium leading-6 text-gray-900">
                Whatsapp
              </label>
              <div className="mt-2">
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  maxLength="11"
                  placeholder="000000-0000"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.whatsapp}
                />
              </div>
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
              </label>
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
              <div className="mt-2">
                <ul className="text-sm">
                  <li style={{ color: passwordStrength.minLength ? 'green' : 'red' }}>Mínimo de 8 caracteres</li>
                  <li style={{ color: passwordStrength.lowerCase ? 'green' : 'red' }}>Pelo menos uma letra minúscula</li>
                  <li style={{ color: passwordStrength.upperCase ? 'green' : 'red' }}>Pelo menos uma letra maiúscula</li>
                  <li style={{ color: passwordStrength.number ? 'green' : 'red' }}>Pelo menos um número</li>
                  <li style={{ color: passwordStrength.specialChar ? 'green' : 'red' }}>Pelo menos um caractere especial (!@#$%^&*()_+)</li>
                </ul>
              </div>
            </div>

            <div>
            <button
  type="submit"
  className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
  Criar Conta
</button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}
