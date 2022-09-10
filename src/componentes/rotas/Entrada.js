import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Vortex } from 'react-loader-spinner';

import { GlobalStyle, Topo, Titulo, InputForm, BotaoForm } from "../../assets/globalStyle";
import { registrarEntrada } from "../../servicos/myWallet";
import Usercontext from "../../context/UserContext";

export default function Entrada() {
    //render
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [desabilitado, setDesabilitado] = useState(false);

    //hooks
    const {user} = useContext(Usercontext);
    const navigate = useNavigate();

    //Logic
    function cadastrarEntrada(e) {
        e.preventDefault();
        setDesabilitado(true);

        const body = {
            valor: valor,
            descricao: descricao
        }
        registrarEntrada(body, user.token)
            .then( (res) => {
                console.log(res.data);
                alert("Entrada criada com sucesso!")
                navigate("/registros")
            })
            .catch( (err) => {
                console.log(err.message);
                alert("Preencha os campos corretamente...")
                setValor("");
                setDescricao("");
            })
        setDesabilitado(false);
    }

    //render
    return (
        <>
            <GlobalStyle />
            <Topo>
                <Titulo>Nova Entrada</Titulo>
            </Topo>
            <form onSubmit={(e) => cadastrarEntrada(e)}>
                <InputForm 
                    placeholder="Valor"
                    type="text"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    disabled={desabilitado}
                    required
                />
                <InputForm 
                    placeholder="Descrição"
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    disabled={desabilitado}
                    required
                />
                <BotaoForm type="submit" disabled={desabilitado}>
                    {desabilitado ? 
                    <Vortex
                        visible={true}
                        height="60"
                        width="60"
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={['#70296e', '#80397e', '#90488d', '#a1589d', '#a1589d', '#b167ad']}
                    /> 
                    : 
                    "Salvar Entrada"
                    }
                </BotaoForm>
            </form>
        </>
    )
}