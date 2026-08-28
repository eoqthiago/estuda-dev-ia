# Estruturas de dados

Estruturas de dados definem como valores são organizados e acessados. A escolha
afeta a clareza da solução e o custo de operações como busca, inserção e
remoção.

## Fila

Uma fila segue a ordem FIFO (*first in, first out*): o primeiro item inserido é
o primeiro removido.

- `enqueue`: adiciona um item ao fim.
- `dequeue`: remove um item do início.
- `peek`: consulta o primeiro item sem removê-lo.

O exemplo mantém um índice para o início da fila. Assim, não precisa deslocar
todos os elementos em cada remoção, como aconteceria com `Array.prototype.shift`.

[Veja a implementação de fila](./fila.js).

## Pilha

Uma pilha segue a ordem LIFO (*last in, first out*): o último item inserido é o
primeiro removido. Em JavaScript, `push` e `pop` permitem representar uma pilha
com um array.

[Veja a implementação de pilha](./pilha.js).

## Lista ligada

Cada nó de uma lista simplesmente ligada armazena um valor e uma referência ao
próximo nó.

```text
head → [10 | próximo] → [20 | próximo] → [30 | null] ← tail
```

Nós não precisam ocupar posições contíguas na memória. Com referências para
`head` e `tail`, inserir nas extremidades custa `O(1)`. Buscar por valor ou
acessar uma posição custa `O(n)`, pois a lista precisa ser percorrida.

Arrays, por outro lado, oferecem acesso por índice em `O(1)`. Inserções no
início ou no meio podem exigir o deslocamento de elementos e custar `O(n)`.

[Veja a implementação de lista ligada](./lista-ligada.js).

## Árvore binária de busca

Uma árvore organiza nós hierarquicamente. Cada nó pode ter filhos à esquerda e
à direita. Em uma árvore binária de busca:

- valores menores ficam à esquerda;
- valores maiores ficam à direita;
- a **raiz** é o primeiro nó;
- folhas são nós sem filhos;
- arestas são as ligações entre os nós.

```text
       10
      /  \
     5    20
      \     \
       7     30
```

Busca e inserção custam `O(log n)` em uma árvore razoavelmente balanceada, mas
podem degradar para `O(n)` quando a árvore fica semelhante a uma lista.

[Veja a implementação de árvore binária de busca](./arvore-binaria-de-busca.js).
