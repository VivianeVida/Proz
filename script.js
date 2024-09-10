// Este código utiliza o método forEach para iterar sobre cada elemento do array numerosDaSorte. Em cada iteração, ele verifica se o número é par e menor que 50, apenas menor que 50, ou maior que 50, e imprime a frase correspondente.
// Você pode copiar e colar este código no OneCompiler para testá-lo. Se precisar de mais alguma coisa, estou aqui para ajudar!


let numerosDaSorte = [37, 14, 26, 5, 94, 87];

numerosDaSorte.forEach(numero => {
    if (numero % 2 === 0 && numero < 50) {
        console.log(`${numero} é par e menor que 50`);
    } else if (numero < 50) {
        console.log(`${numero} é menor que 50`);
    } else {
        console.log(`${numero} é maior que 50`);
    }
});


