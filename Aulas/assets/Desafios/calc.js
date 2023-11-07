const soma = () => {
    num1 = document.getElementById('num1');
    num2 = document.getElementById('num2');
    resultado = document.getElementById('resultado');
    resultado.innerHTML = parseInt(num1.value) + parseInt(num2.value);
}

const sub = () => {
    num1 = document.getElementById('num1');
    num2 = document.getElementById('num2');
    resultado = document.getElementById('resultado');
    resultado.innerHTML = parseInt(num1.value) - parseInt(num2.value);
};
const mult = () => {
    num1 = document.getElementById('num1');
    num2 = document.getElementById('num2');
    resultado = document.getElementById('resultado');
    resultado.innerHTML = parseInt(num1.value) * parseInt(num2.value);
};
const div = () => {
    num1 = document.getElementById('num1');
    num2 = document.getElementById('num2');
    resultado = document.getElementById('resultado');
    resultado.innerHTML = parseInt(num1.value) / parseInt(num2.value);
};