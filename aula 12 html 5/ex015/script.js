function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique oos dados e tente novamente!')
    } else {
        var fsex = document.getElementsByTagName('input') //nao usar ('radsex'), aqui é ('input') pq o inout tem la no sexo mas e fem
        var idade = ano - Number(fano.value)
        var genêro = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[1].checked) { //substituir 0 por 1
            genêro = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[2].checked) { //substituir 1 por 2
            genêro = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genêro} com ${idade} anos`
        res.appendChild(img)
    }
}
    


   
