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

function limpar(){
    res.innerHTML = ''
    selec.innerHTML = ''
    num.focus()
    lista = []
}

function finalizar(){

    res.innerHTML = ''

    if (lista.length == 0){alert('[ERRO] É necessário adicionar ao menos um número!')
    
    }else {
        
        lista.sort()
        let primeiro = lista.at(0)

        let resultados = (content) => {
            content.forEach(el => {
                let item = document.createElement('p')
                item.textContent = el
                res.appendChild(item)
            })
        }

        let tam = Number(lista.length)

        let plural = 'números'

        if (tam == 1) {plural = 'número'}

        let ultimo = lista.at(tam - 1)

        let soma = 0
        lista.forEach(elemento => soma += elemento)

        let calc = soma/tam

        resultados([`Você inseriu ${tam} ${plural}!`,`O maior valor inserido foi ${ultimo}`,`O menor valor inserido foi ${primeiro}`,`O somatório de todos os itens é ${soma}`,`A média dos valores inseridos é ${calc}`,`Obrigado por utilizar! \u{1F33B}`])
        
    }
}