function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else { 
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) { // para o caso de por "0"  em "passo" nao vai travar
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c}\u{1F911} `//Dar espaço da crase para n amontoar os numeros
        }   
    } else {
        //Contagem regressiva
        for(let c = i; c >=f; c -= p) {
            res.innerHTML += ` ${c}\u{1F911} `
        }
    }
    res.innerHTML += `\u{1F3C1}`        //Para add emojis copio o codigo do site https://unicode.org/emoji
                                           //substituo U+ por \u e o restante coloco dentro de {}
    }
}