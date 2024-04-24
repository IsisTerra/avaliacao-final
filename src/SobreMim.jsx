import { Box, Container } from "@mui/material"
import { Title, Paragrafo, Imagem, Conteudo, Subtitulo } from './Style'
import foto from "./assets/foto.jpeg"

function SobreMim() {
    return (
        <>
            <Container style={{ width: '80%', textAlign: 'Center' }}>
                <Title>Isis Terra Gandra da Silva</Title>
                <Conteudo>
                    <Box my={3}>
                        <Imagem src={foto} alt="Foto Isis" />
                    </Box>

                    <Box
                        my={4}
                        p={1}
                        sx={{ border: '2px solid grey' }}
                    >
                        <Paragrafo>
                            Trabalhando em um escritório, gostei da rotina e da forma como a tecnologia otimiza tudo com diferentes programas. E assim, menos papel, menos erros e menos tempo quebrando a cabeça.
                        </Paragrafo>
                        <Paragrafo>
                           Então tive a oportunidade de estudar Frontend e no início, tudo parecia abstrato mas, aos poucos, foi fazendo sentido. Amei estudar a parte de HTML e CSS e ver tudo tomando forma.
                        </Paragrafo>
                        <Paragrafo>
                            JavaScript ainda tem sido um desafio, mas que aos poucos tenho conseguido entender melhor. No React, apesar de ser um pouco de tudo que estudamos antes, parece algo totalmente novo. Mas também, parece bem mais prático no dia a dia para montar um projeto maior.
                        </Paragrafo>
                    </Box>
                </Conteudo>
            </Container>
        </>
    )
}

export default SobreMim