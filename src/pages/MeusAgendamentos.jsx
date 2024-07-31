import { Helmet } from "react-helmet";
import { obterMeusAgendamentos } from "../api_barbearia/api_barbearia";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function MeusAgendamentos() {
    const [agendamentos, setAgendamentos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const navigate = useNavigate();

    async function getDataAgendamentos() {
        try {
            const data = await obterMeusAgendamentos();
            setAgendamentos(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            getDataAgendamentos();
        }
    }, [navigate]);

    // Paginação
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = agendamentos.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(agendamentos.length / itemsPerPage);

    return (
        <div className="container mx-auto px-4 py-8">
            <Helmet>
                <title>Meus Agendamentos - Barbearia do Tim</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4">Meus Agendamentos</h1>
            <ul className="space-y-4">
                {currentItems.map((agendamento, index) => (
                    <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <p><strong>Nome Completo:</strong> {agendamento.nome_completo}</p>
                        <p><strong>Serviço:</strong> {agendamento.nome_do_serviço}</p>
                        <p><strong>Preço:</strong> {agendamento.preço_do_serviço}</p>
                        <p><strong>Funcionário:</strong> {agendamento.nome_do_funcionario}</p>
                        <p><strong>Data:</strong> {agendamento.data_do_agendamento}</p>
                        <p><strong>Horário:</strong> {agendamento.horario_do_agendamento}</p>
                    </li>
                ))}
            </ul>
            <div className="mt-6 flex justify-center space-x-2">
                <button
                    onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 disabled:opacity-50"
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span className="flex items-center text-gray-700">
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 disabled:opacity-50"
                    disabled={currentPage === totalPages}
                >
                    Próxima
                </button>
            </div>
        </div>
    );
}
