function verificaSeOChutePossuiUmValorValido(chute) {
    const numero =+chute

        function chuteForInvalido(numero) {
            elementoChute.innerHTMl += '<div>Valor invalido</div> '
        }
            if (numeroForMaiorouMenorQueValorPermitido(numero)) {
                elementoChute.innerHTMl += ` <div>Valor invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div> `
            }

}

if (numero == numeroSecreto ) [
    document.body.innerHTML= `
    <h2>Voce acertou </h2>
    <h3>O numero secreto era ${numeroSecreto}</h3>
    `
]

else if (numero > numeroSecreto) {
    elementoChute.innerHTML = `
    <div> O numero secreto é menor <i class= "fa-solid fa-down-long"></i></div>
    `
}

else {
    elementoChute.innerHTML += `
    <div> O numero secretoé maior <i class="fa-solid fa-up-long"></i></div>  
    `
}

recognition.addEventListener('ends', () => recognition.star ())

    function numeroForMaiorouMenorQueValorPermitido(numero){
        return numero > maiorValor || numero < menorValor
    }
