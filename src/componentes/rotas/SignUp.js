import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Vortex } from 'react-loader-spinner';

import { signUpUser } from "../../servicos/myWallet";
import {GlobalStyle, Logo, InputForm, BotaoForm, LinkRota} from "../../assets/globalStyle";

export default function SignUp() {
    //state
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [desabilitado, setDesabilitado] = useState(false);

    const navigate = useNavigate()

    //logic
    function cadastrarUsuario(e) {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            alert("Os campos de senhas devem ser iguais!")
            return;
        }

        setDesabilitado(true);

        const body = {
            nome,
            email,
            senha
          }
        signUpUser(body)
            .then( (res) => {
            alert(res.data);
            setDesabilitado(false);
            navigate("/");
            })
            .catch( (err) => {
                console.log(err);
            })
    }

    //render
    return (
        <>
            <GlobalStyle />
            <Tela>
            <Logo>MyWallet</Logo>
            <form onSubmit={(e) => cadastrarUsuario(e)}>
            <InputForm 
                placeholder="Nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                disabled={desabilitado}
                required
            />
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
            <InputForm 
                placeholder="Confirmar Senha"
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
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
                "Cadastrar"
                }
            </BotaoForm>
            </form>
            <LinkRota onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</LinkRota>
            </Tela>
        </>
    )
}

const Tela = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 95px 25px;
`

