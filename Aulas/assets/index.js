function verificarIdade() {
    const inputIdade = document.getElementById('txt-idade');
    const pResultado = document.getElementById('resultado');
    const idade = inputIdade.value
    console.log(inputIdade.value);

    if(idade < 25) {
        pResultado.innerHTML = 'jovem'
    } else {
        pResultado.innerHTML = 'idoso'
    }

}

verificarIdade();