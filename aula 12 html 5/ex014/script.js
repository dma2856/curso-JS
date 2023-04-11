/*function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new date() MUITA ATENÇÃO, por causa do date, e nao Date n tava funcionando
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'tarde.png'
    } else {
        //Boa noite
        img.src = 'noite.png'
    }
}*/

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours() hr ao vivo
    var hora = 22 //altera a hr manual
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //significado: "Se a hora for maior ou igual a 0 E a hora for menor que 12" Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#f2d0a9'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = 'tarde.png'
        document.body.style.background = '#72efdd'
    } else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#6930c3'
    }
    }
    
    

