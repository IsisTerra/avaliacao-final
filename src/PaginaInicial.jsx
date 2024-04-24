import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Container } from '@mui/material';
import { Title, Paragrafo } from './Style';
import { Block } from '@mui/icons-material';

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
      <Container style={{ width: '100%', textAlign: 'Center' }}>
        {dadosAsteroides.map((asteroide) => (
          <Box
            my={4}
            p={1}
            sx={{ border: '2px solid grey' }}
          >
            <Link to={`/asteroides/${asteroide.id}`}>
              <Title>Nome do objeto: {asteroide.name}</Title>
              <Paragrafo>É potencialmente perigoso? {asteroide.is_potentially_hazardous_asteroid ? "Sim" : "Não"}</Paragrafo>
              <Paragrafo>Diâmetro MÁXIMO estimado em quilômetros: {asteroide.estimated_diameter.kilometers.estimated_diameter_max}</Paragrafo>
            </Link>
          </Box>
        ))}
      </Container>
    </>
  )
}

export default PaginaInicial;





