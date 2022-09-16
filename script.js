let num = document.getElementById('inum')
let res = document.getElementById('resultado')
let lista = []
let selec = document.getElementById('seladd')


function adicionar(){
    let numero = Number(num.value)
    if(num.value.length == 0){
        alert('[ERRO] É necessário adicionar ao menos um número!')

    } else if (num.value < 1 || num.value > 100){
        alert('[ERRO] Verifique se os valores estão entre 1 e 100.')

    } else if (lista.indexOf(numero) != -1) {
        alert('Esse número já foi adicionado!')

    } else {
        let op = document.createElement('option')
        lista.push(numero)
        op.text = `Número ${numero} adicionado!`
        selec.appendChild(op)
    }
    num.value = ''
    num.focus()
}

function finalizar(){

    res.innerHTML = ''

    if (lista.length == 0){alert('[ERRO] É necessário adicionar ao menos um número!')
    
    }else {

        let tam = Number(lista.length)
        let itens = document.createElement('p')
        let plural = 'números'
        if (tam == 1) {plural = 'número'}
        itens.textContent = `Você inseriu ${tam} ${plural}!`
        res.appendChild(itens)

        let maior = document.createElement('p')
        let ordem = lista.sort()
        let ultimo = lista.at(tam - 1)
        maior.textContent = `O maior valor inserido foi ${ultimo}`
        res.appendChild(maior)

        let menor = document.createElement('p')
        let primeiro = lista.at(0)
        menor.textContent = `O menor valor inserido foi ${primeiro}`
        res.appendChild(menor)

        let somatorio = document.createElement('p')
        let soma = 0
        for (c = 0; c < tam; c++){
                soma += lista[c]
        }
        somatorio.textContent = `O somatório de todos os itens é ${soma}`
        res.appendChild(somatorio)

        let media = document.createElement('p')
        let calc = soma/tam
        media.textContent = `A média dos valores inseridos é ${calc}`
        res.appendChild(media)

        let thanks = document.createElement('p')
        thanks.textContent = `Obrigado por utilizar! \u{1F33B}`
        res.appendChild(thanks)

    }
}