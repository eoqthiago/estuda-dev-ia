class NoDaArvore {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }
}

class ArvoreBinariaDeBusca {
  constructor() {
    this.raiz = null;
  }

  inserir(valor) {
    const novoNo = new NoDaArvore(valor);

    if (!this.raiz) {
      this.raiz = novoNo;
      return;
    }

    let atual = this.raiz;

    while (true) {
      if (valor === atual.valor) return;

      if (valor < atual.valor) {
        if (!atual.esquerda) {
          atual.esquerda = novoNo;
          return;
        }
        atual = atual.esquerda;
      } else {
        if (!atual.direita) {
          atual.direita = novoNo;
          return;
        }
        atual = atual.direita;
      }
    }
  }

  buscar(valor) {
    let atual = this.raiz;

    while (atual) {
      if (valor === atual.valor) return true;
      atual = valor < atual.valor ? atual.esquerda : atual.direita;
    }

    return false;
  }
}

const arvore = new ArvoreBinariaDeBusca();
arvore.inserir(10);
arvore.inserir(5);
arvore.inserir(20);
arvore.inserir(7);
arvore.inserir(30);

console.log(arvore.buscar(7));
console.log(arvore.buscar(99));
console.log(arvore.raiz);
