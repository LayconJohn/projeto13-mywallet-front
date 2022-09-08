import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";

import UserContext from "../context/UserContext"

import SignUp from "./rotas/SignUp";
import SignIn from "./rotas/SignIn";
import Registros from "./rotas/Registros";
import Entrada from "./rotas/Entrada";
import Saida from "./rotas/Saida";

export default function App() {
    const [user, setUser] = useState({});
    return (
        <>
            <BrowserRouter>
            <UserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/registros" element={<Registros />} />
                <Route path="/entrada" element={<Entrada />} />
                <Route path="/saida" element={<Saida />} />
            </Routes>
            </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}