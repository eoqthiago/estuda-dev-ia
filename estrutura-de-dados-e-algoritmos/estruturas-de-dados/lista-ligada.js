class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class ListaLigada {
  constructor() {
    this.inicio = null;
    this.fim = null;
    this.quantidade = 0;
  }

  adicionar(valor) {
    const novoNo = new No(valor);

    if (!this.inicio) {
      this.inicio = novoNo;
      this.fim = novoNo;
    } else {
      this.fim.proximo = novoNo;
      this.fim = novoNo;
    }

    this.quantidade += 1;
  }

  buscar(valor) {
    let atual = this.inicio;

    while (atual) {
      if (atual.valor === valor) return atual;
      atual = atual.proximo;
    }

    return null;
  }

  valores() {
    const resultado = [];
    let atual = this.inicio;

    while (atual) {
      resultado.push(atual.valor);
      atual = atual.proximo;
    }

    return resultado;
  }
}

const lista = new ListaLigada();
lista.adicionar(10);
lista.adicionar(20);
lista.adicionar(30);

console.log(lista.valores());
console.log(lista.buscar(20));
