/*Divisivel por 3 => Fizz
Divisivel por 5   => Buzz
Divisivel por 3 e 5 =>FizzBuzz
Nao divisivel por 3 e 5 => entrada
Não é um numero => Nãe é um numero*/

const resultado = fizzBuzz(15)//atera aqui
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um numero'
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz'
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    return entrada
}