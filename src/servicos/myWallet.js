import axios from "axios";

function signUpUser(body) {
    const promisse = axios.post("http://localhost:5000/sign-up", body);
    return promisse;
}

export {signUpUser};