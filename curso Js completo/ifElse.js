// If..Else

//Se a hr estiver entre as 6hrs at emeio dia, sera exibido, 'bom dia'
//Se a hr estiver entre 12hrs as 18:00 'boa tarde'
//Caso contrario : sera exibido 'boa noite'
let hora = 20  //Altera aqui
if (hora > 6 && hora < 12) {
    console.log("Bom dia!")
    //codigo a ser executado
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!")
    //codigo a ser executado
}
else {
    console.log("Boa noite!")
    //codigo a ser executado
}