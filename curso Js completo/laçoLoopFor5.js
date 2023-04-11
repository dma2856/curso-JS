//4.For..In
const pessoa = {
    nome: 'Dirley',
    idade: 40
}
//Key-value
for(let chave in pessoa) {
    console.log(chave,pessoa['nome'])
    }

    const cores = ['Vermelho', 'azul', 'verde']

    for (let indice in cores) {
        console.log(indice,cores[indice])
    }
    

//5.For..of
for(let cor of cores){
    console.log(cor)
}