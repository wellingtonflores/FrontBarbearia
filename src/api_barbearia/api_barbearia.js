import axios from "axios";

const url = "https://barbearia-hyi0.onrender.com/api";

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export async function registrandoUsuarios(data) {
    try {
        const response = await axios.post(`${url}/usuarios/registrar`, data);
        alert(response.data.message);
        return response.data; 
    } catch (error) {
        console.error(error);
    }
}

export async function logandoUsuarios(data) {
    try {
        const response = await axios.post(`${url}/usuarios/login`, data);
        const token = response.data.token;
        localStorage.setItem('token', token); 
    } catch (error) {
        console.error(error);
    }
}

export async function obterPerfilUsuario() {
    try {
        const response = await axios.get(`${url}/usuarios/perfil`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter perfil do usuário:', error);

    }
}

export async function atualizarPerfilUsuario(data) {
    try {
        const response = await axios.patch(`${url}/usuarios/perfil`, data);
        alert(response.data.message);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar perfil do usuário:', error);
    }
}

export async function obterFuncionarios(){
    try {
        const response = await axios.get(`${url}/funcionarios`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export async function obterServicos(){
    try {
        const response = await axios.get(`${url}/servicos`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export async function criarAgendamento(data){
    try {
        const response = await axios.post(`${url}/agendamentos`, data)
        alert('Agendamento criado com sucesso');
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export async function obterMeusAgendamentos(){
    try {
        const response = await axios.get(`${url}/usuarios/perfil/agendamentos`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}