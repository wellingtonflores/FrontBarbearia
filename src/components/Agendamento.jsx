import { Helmet } from "react-helmet";
import { obterFuncionarios, obterServicos } from "../api_barbearia/api_barbearia";
import { useState, useEffect } from "react";

export default function Agendamento() {
    const [funcionarios, setFuncionarios] = useState([]);
    const [servicos, setServicos] = useState([]);

    function handleClick(event) {
        console.log(event.target);
    }

    async function getDataFuncionarios() {
        try {
            const data = await obterFuncionarios();
            setFuncionarios(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function getDataServicos() {
        try {
            const data = await obterServicos();
            setServicos(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        async function Data() {
            await getDataFuncionarios();
            await getDataServicos();
        }
        Data();
    }, []);

    return (
        <div>
            <Helmet>
                <title>Agendamento - Barbearia do Tim</title>
            </Helmet>
            <ul>
                {funcionarios.map((funcionario) => (
                    <li key={funcionario.id}>
                        <input 
                            type="radio" 
                            name="funcionario" 
                            id={`funcionario-${funcionario.id}`} 
                            onClick={handleClick}
                        />
                        <label htmlFor={`funcionario-${funcionario.id}`}>{funcionario.nome}</label>
                    </li>
                ))}
            </ul>
            <ul>
                {servicos.map((servico) => (
                    <li key={servico.id}>
                        <input 
                            type="radio" 
                            name="servico" 
                            id={`servico-${servico.id}`} 
                            onClick={handleClick}
                        />
                        <label htmlFor={`servico-${servico.id}`}>{servico.nome}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
