import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import {useNavigate} from "react-router-dom";

import { GlobalStyle, Topo, Titulo, BotaoCadastro } from "../../assets/globalStyle";

import Usercontext from "../../context/UserContext.js";

import Registro from "../elementos/Registro";

import {getRegistros} from "../../servicos/myWallet.js";

export default function Registros() {
    //state
    const [registros, setRegistros] = useState([]);
    const [nome, setNome] = useState("");
    const [soma, setSoma] = useState(0);

    //hooks
    const {user} = useContext(Usercontext);
    const navigate = useNavigate();

    //logic
    useEffect( ()=> {
        setNome(user.nome)

        getRegistros(user.token)
        .then( (res) => {
            console.log(res.data);
            setRegistros(res.data);
            setSoma(pegarSomaValores(res.data))
        })
        .catch((err) => {
            console.log(err.message);
        })
    }, [])

    function pegarSomaValores(arr) {
        let somatorio = 0;
        arr.forEach( (value) => {
            if (value.tipo === "entrada") {
                somatorio += Number(value.valor)
            } else if (value.tipo === "saida") {
                somatorio -= Number(value.valor)
            }
        })
        return somatorio;
    }

    //render
    return (
        <>
            <GlobalStyle />
            <Topo> 
                <Titulo>Olá, {nome}</Titulo>
                <IconeLogOut> <MdLogout /> </IconeLogOut>
            </Topo>
            <AreaRegistros>
                {registros.length > 0 ? 
                registros.map((registro, index) => {
                    return <Registro 
                    key={index}
                        data={registro.data}
                        descricao={registro.descricao}
                        valor={registro.valor}
                        tipo={registro.tipo}
                    />
                }) 
                : 
                <AvisoSemRegistro>"Não há registros de entrada ou saída"</AvisoSemRegistro>
                }
                <AreaSaldo saldo={soma}>
                    <p><strong>Saldo</strong></p>
                    <span >R$ {soma.toFixed(2)}</span>
                </AreaSaldo>
            </AreaRegistros>
            <AreaCadastros>
                <BotaoCadastro onClick={ () => navigate("/entrada")}>
                    <IconeCadastro> <AiOutlinePlusCircle /> </IconeCadastro>
                    Nova Entrada
                </BotaoCadastro>
                <BotaoCadastro onClick={ () => navigate("/saida")}>
                    <IconeCadastro> <AiOutlineMinusCircle /> </IconeCadastro>
                    Nova Saída
                </BotaoCadastro>
            </AreaCadastros>
        </>
    )
}

const IconeLogOut = styled.div`
    width: 35px;
    height: 35px;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    scale: 0.95;

    &:hover {
        scale: 1.1;
    }
`;

const IconeCadastro = styled.div`
    width: 35px;
    height: 35px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-bottom: 32px;
`;

const AreaRegistros = styled.div`
    width: 326px;
    height: 446px;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 5px 5px 8px black, 6px 7px 8px gray, 7px 9px 8px lightgray;
    padding: 23px 11px 20px 12px;
    box-sizing: border-box;
    position: relative;
`;

const AreaCadastros = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
`;

const AreaSaldo = styled.div`
    position: absolute;
    left: 15px;
    bottom: 10px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.saldo > 0 ? "#03AC00" : "#C70000"};

    p {
        font-size: 17px;
        font-weight: bold;
        color: #000000;
    }

    span {
        
        font-size: 17px;
        font-weight: 400;   
    }
`;

const AvisoSemRegistro = styled.div`
    color: #868686;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    padding: 73px;
    box-sizing: border-box;
    text-align: center;
`;

