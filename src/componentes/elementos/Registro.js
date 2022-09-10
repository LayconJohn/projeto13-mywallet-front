import styled from "styled-components";

export default function Registro({data, descricao, valor, tipo}){
    return (
        <AreaTextos>
            <div>
                <TextoData> {data} </TextoData>
                <TextoDescricao> {descricao} </TextoDescricao>
            </div>
            <TextoPreco tipo={tipo}> {valor} </TextoPreco>
        </AreaTextos>
     )
}

const AreaTextos = styled.div`
    margin: 15px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

const TextoData = styled.span`
    color: #C6C6C6;
    font-size: 16px;
    margin-right: 6px;
`;

const TextoDescricao = styled.span`
    color: #000000;
    font-size: 16px;
`;

const TextoPreco = styled.span`
    color: ${props => props.tipo === "entrada" ? "#03AC00" : "#C70000"}
`;