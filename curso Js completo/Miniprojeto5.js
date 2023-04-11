//Receber uma quantidade de valores para avaliar
//Função exibe se cada valor é par ou impar

exibirTipo(5)
function exibirTipo(limite){
    for (let i = 0; i <= limite; i++) {
        if ( i % 2 === 0)
        console.log(i,'PAR')
    else//senão
        console.log(i,'IMPAR')//Colocando i add o numero a esquerda ex.: 0 texto, 1 texto 2
    }
}