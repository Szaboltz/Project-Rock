function produto() {
    let nome = document.getElementById('nome');
    let preco = document.getElementById('preco');
    let url = document.getElementById('url');
    let hmtl = document.getElementById('main');

    products.push({
        name: nome.value,
        price: preco.value,
        url: url.value
    })

    hmtl.innerHTML = ''
    loadProducts()
}   

const products = [
    {
        name: 'Café',
        price: '10,00',
        url: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2021/04/102062307_m-810x541.jpg'
    },
    {
        name: 'Café 2',
        price: '10,00',
        url: 'https://s2.glbimg.com/pGTd3kAbZCgJBM4vEDJmVD806Xo=/e.glbimg.com/og/ed/f/original/2015/03/03/cafezinho.jpg'
    },
    {
        name: 'Café 3',
        price: '10,00',
        url: 'https://4.bp.blogspot.com/-VGdRojNe8MY/UGzUHED1jpI/AAAAAAABKqM/Cp1V-MmhE9Y/s1600/fotografias%2Bde-cafeen-taza-con-canela-coffee-.jpg'
    }
]




const loadProducts = () => {
    let hmtl = document.getElementById('main');
    products.map((product) =>  hmtl.innerHTML += `<div class="card"> <img src="${product.url}" width="200" height="200"> <div class="text"> <p>${product.name}</p> <p>R$: ${product.price}</p> </div> </div>`)
}