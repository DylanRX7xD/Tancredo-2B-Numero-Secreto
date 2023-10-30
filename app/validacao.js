function verificaSeOChutePossuiUmValorValido(chute) {
        const numero = +chute

        if (chuteForInvalido(numero)) {
            console.log('Valor invalido')
        }


}

function chuteForInvalido (numero) {
    return Number.isNaN(numero)
}