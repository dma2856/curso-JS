let amigo = {nome: 'José', 
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)//chamada altera aqui 
console.log(`${amigo.mome} pesa ${amigo.peso}Kg`)