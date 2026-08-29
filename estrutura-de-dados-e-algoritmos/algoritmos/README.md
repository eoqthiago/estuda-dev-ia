# Algoritmos

Um algoritmo é uma sequência finita de passos para resolver um problema. Esta
pasta reúne implementações isoladas para facilitar execução, estudo e análise.

## Busca binária

A busca binária procura um valor em uma coleção **ordenada**. A cada comparação,
ela elimina aproximadamente metade do espaço restante. Sua complexidade
temporal é `O(log n)` e a implementação iterativa usa `O(1)` de espaço
adicional.

[Veja a implementação de busca binária](./busca-binaria.js).

## Merge sort

Merge sort divide o array em partes menores, ordena cada parte recursivamente e
combina os resultados. Sua complexidade temporal é `O(n log n)` nos casos
melhor, médio e pior. Esta implementação usa `O(n)` de espaço adicional para
criar e combinar arrays.

[Veja a implementação de merge sort](./merge-sort.js).

## Decomposição em cédulas

O algoritmo guloso escolhe repetidamente a maior cédula que não ultrapassa o
valor restante. Para as denominações usadas no exemplo, ele produz uma
decomposição com o menor número de cédulas.

Como a quantidade de denominações é fixa, a implementação custa `O(1)`. Se a
lista de denominações pudesse crescer, o custo seria `O(d)`, em que `d` é a
quantidade de denominações.

A estratégia gulosa não encontra necessariamente a solução ótima para qualquer
conjunto arbitrário de denominações.

[Veja a implementação de decomposição em cédulas](./decomposicao-em-cedulas.js).
