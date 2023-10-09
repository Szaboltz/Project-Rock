function produto() {
    let nome = document.getElementById('nome');
    let preco = document.getElementById('preco');
    let url = document.getElementById('url');
    let hmtl = document.getElementById('main');

    hmtl.innerHTML += `<div class="card"> <img src="${url.value}" width="200" height="200"> <div class="text"> <p>${nome.value}</p> <p>R$: ${preco.value}</p> </div> </div>`

}