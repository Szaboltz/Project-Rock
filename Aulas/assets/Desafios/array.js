//Array que contem um objeto
const object = [{
    name: 'Henrique',
    age: '19'
}, 10, 20, 30, 'teste']

console.log(object)
//Acessando um atributo do objeto que está dentro de um array
console.log(object[0].age)

//Criando um objeto com nome e atribuindo a um array

const test = {
    text: 'test'
}

const arrayTest = [test];

//Destruturando um array

const arrayTest02 = [20, 30, 40];

const [number1, , number3] = arrayTest02 // Note que a variável 'number1' tera valo igual a primeira posição do array e number3 tera o valor da terceira posição do array

console.log(number1 + ' ' + number3);