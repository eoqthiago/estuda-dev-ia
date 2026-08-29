function buscaBinaria(numerosOrdenados, alvo) {
  let inicio = 0;
  let fim = numerosOrdenados.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    if (numerosOrdenados[meio] === alvo) return meio;

    if (numerosOrdenados[meio] < alvo) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1;
}

const numeros = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(buscaBinaria(numeros, 23));
