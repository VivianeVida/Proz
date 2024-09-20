function calcularEImprimirOperacoes(a, b) {
  // Verifica se o divisor é zero
  if (b === 0) {
    console.log("Divisão por zero não é permitida.");
    return;
  }

  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} / ${b} = ${a / b}`);
}

// Exemplo de uso:
calcularEImprimirOperacoes(5, 2);
