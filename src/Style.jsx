import styled from "styled-components";

const Title = styled.h1`
    color: #fff;
    font-size: 40px;
    margin: 20px;
`
const Subtitulo = styled.h2`
    color: #fff;
    font-size: 30px;
    margin: 12px;
    text-align: start;
`

const Paragrafo = styled.p`
    color: #fff;
    font-size: 20px;
    margin: 10px;
    text-align: start;
    text-shadow: 3px 4px 5px #000;
`

const Imagem = styled.img`
    width: 350px;
    height: 450px;
`

const Conteudo = styled.main`
    display: flex;
    justify-content: flex-start;
   align-items: start;
    gap: 10px;
`

export { Title, Paragrafo, Subtitulo, Imagem, Conteudo }