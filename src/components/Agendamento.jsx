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
        <div style={{height: "100vh"}}>
            <Helmet>
                <title>Agendar - Barbearia do Tim</title>
            </Helmet>
            <form action="" method="post" onSubmit={handleClickButton}>
            <h2>Barbeiros: </h2>
            <ul>
                {funcionarios.map((funcionario) => (
                    <li key={funcionario.id}>
                        <input 
                            type="radio" 
                            name="funcionario" 
                            id={`funcionario-${funcionario.id}`} 
                            onClick={handleClickBarbeiros}
                        />
                        <label htmlFor={`funcionario-${funcionario.id}`}>{funcionario.nome}</label>
                    </li>
                ))}
            </ul>
            <h2>Serviços:</h2>
            <ul>
                {servicos.map((servico) => (
                    <li key={servico.id}>
                        <input 
                            type="radio" 
                            name="servico" 
                            id={`servico-${servico.id}`}
                            onClick={handleClickServiços}
                            
                        />
                        <label htmlFor={`servico-${servico.id}`}>{servico.nome}</label>
                    </li>
                ))}
            </ul>
                <h2>Data</h2>
                <input type="date" name="" id="" onChange={handleChangeData}/>
                <h2>Hora</h2>
                <input type="time" name="" id="" onChange={handleChangeHora}/> <br></br>
                <button type="submit">Marcar Agendamento</button>
            </form>
            
        </div>
    );
}
