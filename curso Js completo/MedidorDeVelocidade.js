//velocidade max de 70km/h
//a cada 5Km do limite vc ganha 1 ponto
// Math.Floor
// caso pontos maior de 12 -> 'Carteira suspensa'
verificarVelocidade(130)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const KmPorPonto = 5
    if ( velocidade <= velocidadeMaxima)
    console.log('Ok')
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / KmPorPonto)
        if( pontos >= 12)
            console.log('Carteira Suspensa')
        else
            console.log('Ponto', pontos)

        }
}
