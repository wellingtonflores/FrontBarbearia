import { Helmet } from "react-helmet";
import { obterMeusAgendamentos } from "../api_barbearia/api_barbearia";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function MeusAgendamentos() {
    const [agendamentos, setAgendamentos] = useState([]);
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

    return (
        <div>
            <Helmet>
                <title>Meus Agendamentos - Barbearia do Tim</title>
            </Helmet>
            <h1>Meus Agendamentos:</h1>
            <ul>
                {agendamentos.map((agendamento, index) => (
                    <li key={index}>
                        <p><strong>Nome Completo:</strong> {agendamento.nome_completo}</p>
                        <p><strong>Serviço:</strong> {agendamento.nome_do_serviço}</p>
                        <p><strong>Preço:</strong> {agendamento.preço_do_serviço}</p>
                        <p><strong>Funcionário:</strong> {agendamento.nome_do_funcionario}</p>
                        <p><strong>Data:</strong> {agendamento.data_do_agendamento}</p>
                        <p><strong>Horário:</strong> {agendamento.horario_do_agendamento}</p>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}
