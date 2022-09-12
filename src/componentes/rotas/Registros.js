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
    const [limiteDeTexto, setLimiteDeTexto] = useState(false);

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
            alert("Tempo de login finalzado. Faça o login novamente")
            navigate("/");
        })

        if (registros.length > 10) {
            setLimiteDeTexto(true);
        } else {
            setLimiteDeTexto(false);
        }
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
                <IconeLogOut onClick={() => navigate("/")}> <MdLogout /> </IconeLogOut>
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
            </AreaRegistros>
            <AreaSaldo saldo={soma} noLimite={limiteDeTexto}>
                <p><strong>Saldo</strong></p>
                <span >R$ {soma.toFixed(2)}</span>
            </AreaSaldo>    
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
    overflow-y: scroll;

`;

const AreaCadastros = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
`;

const AreaSaldo = styled.div`
    position: fixed;
    width: 326px;
    left: 25px;
    bottom: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.saldo > 0 ? "#03AC00" : "#C70000"};
    z-index: 1;
    box-sizing: border-box;
    background-color: ${props => props.noLimite ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.2)"};
    padding: 0px 10px;  


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

