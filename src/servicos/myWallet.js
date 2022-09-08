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

export {signUpUser, signInUser};