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
    console.log(formData)
    await logandoUsuarios(formData);
    setFormData({
        email: "",
        senha: ""
    })
    navigate('/perfil')
  }

  return (
    <>
    <Helmet>
      <title>  Login - Barbearia do Tim</title>
    </Helmet>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
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
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(obterPerfilUsuario)}>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


    
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />

//         <label htmlFor="senha">Senha</label>
//         <input type="password" name="senha" id="senha" onChange={handleChange} value={formData.senha} />
        
//         <button type="submit" onClick={(obterPerfilUsuario)}>Logar</button>
//       </form>
//     </div>
//   );
// }
