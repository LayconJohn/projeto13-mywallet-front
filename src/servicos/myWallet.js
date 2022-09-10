import axios from "axios";

const URL_BASE = "http://localhost:5000"

function signUpUser(body) {
    const promisse = axios.post(`${URL_BASE}/sign-up`, body);
    return promisse;
}

function signInUser(body) {
    const promisse = axios.post(`${URL_BASE}/sign-in`, body);
    return promisse;
}

function getRegistros(token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promisse = axios.get(`${URL_BASE}/registros`, config);
    return promisse;
}

function registrarEntrada(body, token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    const promisse = axios.post(`${URL_BASE}/entrada`, body, config);
    return promisse;
}

function registrarSaida(body, token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promisse = axios.post(`${URL_BASE}/saida`, body, config);
    return promisse;
}

export {signUpUser, signInUser, getRegistros, registrarEntrada, registrarSaida};