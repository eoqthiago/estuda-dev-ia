class Fila {
  constructor() {
    this.itens = [];
    this.inicio = 0;
  }

  enqueue(valor) {
    this.itens.push(valor);
  }

  dequeue() {
    if (this.estaVazia()) return undefined;

    const valor = this.itens[this.inicio];
    this.inicio += 1;

    if (this.inicio > 50 && this.inicio * 2 >= this.itens.length) {
      this.itens = this.itens.slice(this.inicio);
      this.inicio = 0;
    }

    return valor;
  }

  peek() {
    return this.itens[this.inicio];
  }

  estaVazia() {
    return this.inicio >= this.itens.length;
  }

  tamanho() {
    return this.itens.length - this.inicio;
  }
}

const fila = new Fila();
fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);

console.log(fila.peek());
console.log(fila.tamanho());
console.log(fila.dequeue());
console.log(fila.peek());
