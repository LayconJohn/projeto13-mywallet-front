import {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Vortex } from 'react-loader-spinner';

import { GlobalStyle, Topo, Titulo, InputForm, BotaoForm } from "../../assets/globalStyle";
import { registrarSaida } from "../../servicos/myWallet";
import Usercontext from "../../context/UserContext";

export default function Saida() {
    //state
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [desabilitado, setDesabilitado] = useState(false);

    //hooks
    const {user} = useContext(Usercontext);
    const navigate = useNavigate();

    //logic
    function cadastrarSaida(e) {
        e.preventDefault();
        setDesabilitado(true);

        const body = {
            valor,
            descricao
        }
        registrarSaida(body, user.token)
            .then( (res) => {
                console.log(res.data);
                alert("Saída cadastrada com sucesso!")
                navigate("/registros");
            })
            .catch( (err) => {
                console.log(err.message);
                alert("Preencha os campos novamente e tente novamente...");
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
                <Titulo>Nova Saída</Titulo>
            </Topo>
            <form onSubmit={(e) => cadastrarSaida(e)}>
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
                    "Salvar Saída"
                    }
                </BotaoForm>
            </form>
        </>
    )
}