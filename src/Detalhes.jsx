import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Box, Container } from "@mui/material";
import axios from "axios";
import { Title, Paragrafo, Subtitulo } from "./Style";

function Detalhes() {
    const { id } = useParams()
    const [asteroide, setAsteroide] = useState(null)

    const consultarId = async () => {
        const url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=XIJT1LUUVpFyJOn99JA6JWarMX2rcrseBjhPHy5k`;

        const detalhesAsteroides = await axios.get(url);
        setAsteroide(detalhesAsteroides.data)
    }

    useEffect(() => {
        consultarId()
    }, [])

    return (
        <>
            <Container style={{ width: '80%', textAlign: 'Center' }}>
                <Title>Detalhes do asteroide</Title>
                <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                    <Subtitulo>Nome do objeto: {asteroide?.name}</Subtitulo>
                    <Paragrafo>É potencialmente perigoso? {asteroide?.is_potentially_hazardous_asteroid ? "Sim" : "Não"}</Paragrafo>
                    <Paragrafo>Diâmetro MÁXIMO estimado em quilômetros: {asteroide?.estimated_diameter?.kilometers?.estimated_diameter_max}</Paragrafo>

                    <Paragrafo>Velocidade relativa do objeto por hora: {asteroide?.close_approach_data[0]?.relative_velocity?.kilometers_per_hour}</Paragrafo>
                    <Paragrafo>Magnitude absoluta: {asteroide?.absolute_magnitude_h}</Paragrafo>
                </Box>
            </Container>
        </>
    )
}

export default Detalhes