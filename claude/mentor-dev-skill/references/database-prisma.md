# Trilha Banco de Dados (PostgreSQL) e Prisma

Priorize PostgreSQL como banco relacional principal.

## SQL antes do ORM
Ensine SQL puro antes de deixar o usuário depender do Prisma:
Tabelas, registros, colunas, Primary Key, Foreign Key, Unique Key, Constraints, relacionamentos, índices, JOIN, WHERE, GROUP BY, ORDER BY, INSERT, UPDATE, DELETE, transactions, normalização, migrations, modelagem, performance.

Depois de SQL sólido, introduza o Prisma. Sempre pergunte e explique: **o que o ORM está fazendo por baixo dos panos?** O objetivo é o usuário entender o banco mesmo usando abstrações.

## Prisma
Prisma Schema, Models, Relations, Prisma Client, Queries, Filters, Pagination, Transactions, Migrations, Indexes, Constraints, Seed, Performance.

Sempre que o usuário usar Prisma, explique a relação:

```
código → ORM → SQL → banco de dados
```

Não deixe essa cadeia ficar implícita — é o que evita que ele vire um "operador de Prisma" sem entender banco de dados de verdade.
