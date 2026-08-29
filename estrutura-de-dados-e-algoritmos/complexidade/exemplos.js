const numeros = [1, 2, 3, 4, 5];


// O(1): o acesso por índice não depende do tamanho do array.
const nomes = ["Mateus", "Maria", "José"];
console.log(nomes[1]);

// O(n): cada elemento é visitado uma vez.
for (const numero of numeros) {
  console.log(numero);
};

// O(n²): cada elemento é combinado com todos os outros.
for (const primeiro of numeros) {
  for (const segundo of numeros) {
    console.log(primeiro, segundo);
  };
};

// O(1) de espaço adicional.
function somar(primeiro, segundo) {
  return primeiro + segundo;
};

// O(n) de espaço adicional.
function copiarArray(itens) {
  const copia = [];

  for (const item of itens) {
    copia.push(item);
  }

  return copia;
};

console.log(somar(2, 3));
console.log(copiarArray(numeros));
