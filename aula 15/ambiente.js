let num = [5, 8, 2, 9, 3] // var ou let
num.sort()  // aqui exibe no node ordem crescente
num.push(1)
console.log(num) 
console.log(`O vetor tem ${num.length} posições`) // aqui exibe no node na ordem
console.log(`O primeiro valor do vetor é ${num[0]}`) //0 é 5, 1 é 8, 2 é 2, 3 é 9 e 4 é 3
let pos = num.indexOf(7)// 7 O valor n foi encontrado
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

