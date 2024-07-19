import axios from "axios";

const url = "http://localhost:4000/api";

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
        alert('Login bem-sucedido');
    } catch (error) {
        console.error(error);
    }
}

export async function obterPerfilUsuario() {
    try {
        const response = await axios.get(`${url}/usuarios/perfil`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter perfil do usuário:', error);

    }
}

export async function atualizarPerfilUsuario(data) {
    try {
        const response = await axios.patch(`${url}/usuarios/perfil`, data);
        console.log('Perfil atualizado com sucesso:', response.data); // Verifique a resposta após atualização
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