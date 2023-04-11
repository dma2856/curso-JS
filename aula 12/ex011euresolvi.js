/*var idade = 65
if (idade < 16) {
    console.log(`Não vota!`)//se vc tem 16 anos ou menos nao vota
} else if (idade < 18 || idade > 65){// esse || acredito q significa "OU"
        console.log(`Voto opcional!`)//voto opcional (lembrando q com simbolo < 18 joga 17 para baixo <=18 inclui o 18)
} else {
        console.log(`Voto obrigatório!`)
}
*/

//Aqui o cliente quer separar veículos acima de 20 anos que não pagam ipva
var idade = 20 
if ( idade > 20){
        console.log(`Este veículo não paga IPVA!`)
}/* else if (idade <= 20 )posso usar assim, ou simplificar como abaixo*/
else {
        console.log(`Este veículo paga IPVA este ano!`)
}