function InformacoesBasicas() {
    return (
        <>
            <h1>Nome do objeto: {asteroides.name}</h1>
            <p>É potencialmente perigoso? {asteroide.is_potentially_hazardous_asteroid ? "Sim" : "Não"}</p>
            <p>Diâmetro MÁXIMO estimado em quilômetros: {asteroide.estimated_diameter.kilometers.estimated_diameter_max}</p>
        </>
    )
}

export default InformacoesBasicas