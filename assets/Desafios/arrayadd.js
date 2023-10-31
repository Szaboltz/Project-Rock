let movies = [];

function add() {
    let nome = document.getElementById('nome');
    let categoria = document.getElementById('categoria');
    movies.push({
        name: nome.value,
        rank: categoria.value
    })
    nome.value = '';
    categoria.value = '';
}

function show(){
    let lista = document.getElementById('array');
    
    lista.innerHTML = '';

    movies.map((filme) => {
        lista.innerHTML += `<div class="movies">
                                 <div class="array" id="array"> <div class="text"> <p>Nome: ${filme.name}</p> <p>Categoria: ${filme.rank}</p> </div>  </div>
                             </div>`
    })
}

function remove(){
   movies.pop()
}

function removeByName() {
    let nome = document.getElementById('nome');
    movies.map((filme, index) => {
        if (filme.name === nome.value) {
            movies.splice(index, 1);
        }
    })
}

