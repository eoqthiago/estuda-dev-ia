function intercalar(esquerda, direita) {
  const resultado = [];
  let indiceEsquerdo = 0;
  let indiceDireito = 0;

  while (
    indiceEsquerdo < esquerda.length &&
    indiceDireito < direita.length
  ) {
    if (esquerda[indiceEsquerdo] <= direita[indiceDireito]) {
      resultado.push(esquerda[indiceEsquerdo]);
      indiceEsquerdo += 1;
    } else {
      resultado.push(direita[indiceDireito]);
      indiceDireito += 1;
    }
  }

  return [
    ...resultado,
    ...esquerda.slice(indiceEsquerdo),
    ...direita.slice(indiceDireito),
  ];
}

function mergeSort(numeros) {
  if (numeros.length <= 1) return numeros;

  const meio = Math.floor(numeros.length / 2);
  const esquerda = mergeSort(numeros.slice(0, meio));
  const direita = mergeSort(numeros.slice(meio));

  return intercalar(esquerda, direita);
}

const numeros = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(numeros));
