import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from '@mui/material';
import './PaginaInicial.css'

function PaginaInicial() {
  const dataAtual = new Date().toISOString().split('T')[0]
  const [dadosAsteroides, setDadosAsteroides] = useState([]);

  console.log(dataAtual)

  const buscarAsteroides = async () => {

    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataAtual}&end_date=${dataAtual}&api_key=XIJT1LUUVpFyJOn99JA6JWarMX2rcrseBjhPHy5k`;

    const dadosAsteroides = await axios.get(url)
    setDadosAsteroides(dadosAsteroides.data.near_earth_objects[dataAtual])
  }

  useEffect(() => {
    buscarAsteroides()
  }, [])

  return (
    <>
      <Container style={{width:'80%', textAlign:'Center'}}>
        {dadosAsteroides.map((asteroide) => (
          <Link to={`/asteroides/${asteroide.id}`}>
            <h1>Nome do objeto: {asteroide.name}</h1>
            <p>É potencialmente perigoso? {asteroide.is_potentially_hazardous_asteroid ? "Sim" : "Não"}</p>
            <p>Diâmetro MÁXIMO estimado em quilômetros: {asteroide.estimated_diameter.kilometers.estimated_diameter_max}</p>
          </Link>
        ))}
      </Container>
    </>
  )
}

export default PaginaInicial;





