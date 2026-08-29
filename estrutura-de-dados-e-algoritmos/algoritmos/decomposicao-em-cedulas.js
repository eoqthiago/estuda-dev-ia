// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

function decomporEmCedulas(valor) {
  if (!Number.isInteger(valor) || valor < 0) {
    throw new TypeError("O valor deve ser um número inteiro não negativo.");
  }

  const cedulas = [100, 50, 20, 10, 5, 2, 1];
  let restante = valor;

  return cedulas.map((cedula) => {
    const quantidade = Math.floor(restante / cedula);
    restante %= cedula;

    return { cedula, quantidade };
  });
}

const valor = 576;
console.log(valor);

for (const resultado of decomporEmCedulas(valor)) {
  console.log(`${resultado.quantidade} nota(s) de R$ ${resultado.cedula}`);
}
