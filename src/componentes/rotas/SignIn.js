import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Vortex } from 'react-loader-spinner';

import { signInUser } from "../../servicos/myWallet";
import Usercontext from "../../context/UserContext";

import {GlobalStyle, Logo, InputForm, BotaoForm, LinkRota} from "../../assets/globalStyle";

export default function SignIn() {
    //state
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [desabilitado, setDesabilitado] = useState(false);

    //hook
    const navigate = useNavigate();
    const {setUser} = useContext(Usercontext);

    //logic
    function logarUsuario(e) {
        e.preventDefault();
        setDesabilitado(true);

        const body = {
            email,
            senha
        }
        signInUser(body)
            .then( (res) => {
                setUser(res.data);
                navigate("/registros")
            })
            .catch( (err) => {
                console.log(err);
                alert("Usuário ou senha errada")
            })

        setDesabilitado(false);
    }

    //render
    return (
        <>
            <GlobalStyle />
            <Tela>
                <Logo>MyWallet</Logo>
                <form onSubmit={(e) => logarUsuario(e)}>
                    <InputForm 
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={desabilitado}
                        required
                    />
                    <InputForm 
                        placeholder="Senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
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
                        "Entrar"
                        }
                    </BotaoForm>
                </form>
                <LinkRota onClick={() => navigate("/sign-up")}>Primeira vez? Cadastre-se!</LinkRota>
            </Tela>
        </>
    )
}

const Tela = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 160px;
`;