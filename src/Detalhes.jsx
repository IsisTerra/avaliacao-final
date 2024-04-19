import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import './PaginaInicial.css'

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
            <h1>Detalhes do asteroide</h1>

            <h2>Nome do objeto: {asteroide?.name}</h2>
            <p>É potencialmente perigoso? {asteroide?.is_potentially_hazardous_asteroid ? "Sim" : "Não"}</p>
            <p>Diâmetro MÁXIMO estimado em quilômetros: {asteroide?.estimated_diameter?.kilometers?.estimated_diameter_max}</p>

            <p>Velocidade relativa do objeto por hora: {asteroide?.close_approach_data[0]?.relative_velocity?.kilometers_per_hour}</p>
            <p>Magnitude absoluta: {asteroide?.absolute_magnitude_h}</p>
        </>
    )
}

export default Detalhes