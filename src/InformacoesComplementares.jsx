function InformacoesComplementares() {
    return (
        <>
            <p>Velocidade relativa do objeto por hora: {asteroide.close_approach_data.relative_velocity.kilometers_per_hour}</p>
            <p>Magnitude absoluta: {asteroide.absolute_magnitude_h}</p>
        </>
    )
}

export default InformacoesComplementares