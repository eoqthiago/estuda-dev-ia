class Pilha {
  constructor() {
    this.itens = [];
  }

  push(valor) {
    this.itens.push(valor);
  }

  pop() {
    return this.itens.pop();
  }

  peek() {
    return this.itens[this.itens.length - 1];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  tamanho() {
    return this.itens.length;
  }
}

const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);

console.log(pilha.pop());
console.log(pilha.peek());
console.log(pilha.tamanho());
