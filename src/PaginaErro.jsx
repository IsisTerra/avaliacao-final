import { Container } from "@mui/material"
import { Title } from "./Style"
import astronauta from './assets/astronauta.png'

function PaginaErro() {

    return (
        <>
            <Container style={{ width: '80%', textAlign: 'Center' }}>
                <Title>Página não encontrada</Title>
                <img src={astronauta} alt="Astronauta" />
            </Container>
        </>
    )
}

export default PaginaErro