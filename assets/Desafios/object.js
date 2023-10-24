const person = {
    name: "Henrique Szabo",
    gender: 'Male'
}

const endereco = {
    post: '11677200',
    rua: "Rua vinte de abril"
}

const card = {
    cvv: '777',
    num: '3333.3333.3333',
    date: '28/30'
    // "mome entre espaços":

}

// Acessando um atributo com espaços
// card['nome entre espaços']

// Desconstruindo um objeto
// const {cvv, num, date} = card;

const buy = {...person, ...endereco, payment: {...card}, total: "5000"}

console.log(buy)