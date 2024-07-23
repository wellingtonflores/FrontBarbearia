import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">INSTITUCIONAL</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-blue-400 hover:underline">Sobre</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-400 hover:underline">Serviços</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-400 hover:underline">Política de Privacidade</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-bold mb-4">ATENDIMENTO</h2>
          <ul>
            <li className="mb-2">Telefone</li>
            <li className="mb-2">(51) 9999-9999</li>
            <li className="mb-2">Horário de Funcionamento</li>
            <li className="mb-2">Seg. à Sex. das 09h às 22h</li>
            <li className="mb-2">Contato</li>
            <li><a href="mailto:wellingtonluiscardoso@hotmail.com" className="text-blue-400 hover:underline">wellingtonluiscardoso@hotmail.com</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">MINHA CONTA</h2>
          <ul>
            <li className="mb-2"><a href="/perfil" className="text-blue-400 hover:underline">Minha conta</a></li>
            <li className="mb-2"><a href="/agendamentos" className="text-blue-400 hover:underline">Meus Agendamentos</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">REDES SOCIAIS</h2>
          <ul>
            <li className="mb-2"><a href="https://www.instagram.com/wellingtonnluis/" className="text-blue-400 hover:underline">Instagram</a></li>
            <li className="mb-2"><a href="https://www.linkedin.com/in/wellington-flores/" className="text-blue-400 hover:underline">Linkedin</a></li>
            <li className="mb-2"><a href="https://github.com/wellingtonflores" className="text-blue-400 hover:underline">GitHub</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
