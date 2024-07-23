import { Helmet } from "react-helmet";
import { obterFuncionarios, obterServicos, criarAgendamento } from "../api_barbearia/api_barbearia";
import { useState, useEffect } from "react";

export default function Agendamento() {
    const [funcionarios, setFuncionarios] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [agendamentoData, setAgendamentoData] = useState({
        funcionarios_id: "",
        servicos_id: "",
        data: "",
        hora: "",

    })

    function handleClickBarbeiros(event) {
        const evento = event.target.id
        const idFuncionario = evento.split("-") 
        setAgendamentoData({
            ...agendamentoData,
            funcionarios_id: idFuncionario[1],
        })
    }

    function handleClickServiços(event) {
        const evento = event.target.id
        const idServico = evento.split("-") 
        setAgendamentoData({
            ...agendamentoData,
            servicos_id: idServico[1],
        })
    }

    function handleChangeData(event) {
        const data = event.target.value
        setAgendamentoData({
            ...agendamentoData,
            data: data,
        })
    }

    function handleChangeHora(event){
        const hora = event.target.value
        setAgendamentoData({
            ...agendamentoData,
            hora: hora,
        })
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

    async function handleClickButton(event){
        event.preventDefault();
        console.log("Dados enviados: ", agendamentoData)
        await criarAgendamento(agendamentoData)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
            <Helmet>
                <title>Agendar - Barbearia do Tim</title>
            </Helmet>
            <form 
                onSubmit={handleClickButton} 
                className="bg-white p-6 rounded-lg shadow-lg space-y-6 w-full max-w-lg"
            >
                <h2 className="text-xl font-semibold mb-4">Barbeiros:</h2>
                <ul className="space-y-2">
                    {funcionarios.map((funcionario) => (
                        <li key={funcionario.id} className="flex items-center">
                            <input 
                                type="radio" 
                                name="funcionario" 
                                id={`funcionario-${funcionario.id}`} 
                                className="mr-2"
                                onChange={handleClickBarbeiros}
                            />
                            <label htmlFor={`funcionario-${funcionario.id}`} className="text-lg">{funcionario.nome}</label>
                        </li>
                    ))}
                </ul>

                <h2 className="text-xl font-semibold mb-4">Serviços:</h2>
                <ul className="space-y-2">
                    {servicos.map((servico) => (
                        <li key={servico.id} className="flex items-center">
                            <input 
                                type="radio" 
                                name="servico" 
                                id={`servico-${servico.id}`} 
                                className="mr-2"
                                onChange={handleClickServiços}
                            />
                            <label htmlFor={`servico-${servico.id}`} className="text-lg">{servico.nome}</label>
                        </li>
                    ))}
                </ul>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Data:</h2>
                    <input 
                        type="date" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        onChange={handleChangeData}
                    />

                    <h2 className="text-xl font-semibold">Hora:</h2>
                    <input 
                        type="time" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        onChange={handleChangeHora}
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-black text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
                >
                    Marcar Agendamento
                </button>
            </form>
        </div>
    );
}
