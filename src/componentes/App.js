import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignUp from "./rotas/SignUp";
import SignIn from "./rotas/SignIn";
import Registros from "./rotas/Registros";
import Entrada from "./rotas/Entrada";
import Saida from "./rotas/Saida";

export default function App() {
    return (
        <>
            <BrowserRouter>
            
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/registros" element={<Registros />} />
                <Route path="/entrada" element={<Entrada />} />
                <Route path="/saida" element={<Saida />} />
            </Routes>
            </BrowserRouter>
        </>
    )
}