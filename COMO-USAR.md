# Como usar — passo a passo por linguagem

Não importa a plataforma (Claude, Gemini ou NotebookLM) nem a linguagem — a lógica de uso é sempre a mesma: você conversa normalmente e usa os comandos especiais quando quiser um modo específico. Abaixo, um roteiro prático pra cada caso.

## Roteiro geral (vale pra qualquer linguagem)

1. Comece a conversa contando o que você já sabe e o que quer aprender (ex: "sou iniciante total" ou "já sei o básico de lógica, quero aprender React").
2. Mande `COMEÇAR ESTUDO` pra abrir uma sessão estruturada, ou vá direto com `EXPLIQUE [algum assunto]` se já sabe o que quer.
3. Resolva os exercícios que ele propõe **antes** de pedir o código — essa é a parte que realmente ensina.
4. Quando travar de verdade, use `DEBUG` (pra investigar um erro) em vez de perguntar "por que não funciona".
5. Peça `CODE REVIEW` sempre que escrever algo, mesmo pequeno — é o hábito mais valioso pra virar bom dev.
6. Só use `PRECISO DO CODIGO` quando já tiver tentado e quiser ver a implementação completa comentada.

---

## JavaScript / TypeScript / React / Next.js

Esta é a trilha mais funda (a skill do Claude tem arquivo de referência dedicado; no Gemini/NotebookLM o prompt já cobre os tópicos principais).

1. `quero aprender JavaScript do zero, nunca programei` — ele vai te situar em fundamentos (lógica, variáveis, funções) antes de pular pra frameworks.
2. Depois dos fundamentos: `EXPLIQUE closures` → `EXPLIQUE async/await` → `EXPLIQUE promises` (os três juntos resolvem 80% da confusão de quem tá aprendendo JS assíncrono).
3. Quando for pra React: `COMEÇAR ESTUDO componentes e props no React`.
4. Peça projetos reais: `me propõe um projeto inicial que junte frontend e backend`.
5. Simule o dia a dia: `CODE REVIEW` no que você fizer, e de vez em quando `simula uma entrevista técnica de estagiário`.

## Node.js / NestJS (Backend)

1. `EXPLIQUE o que é uma API REST` antes de entrar em framework.
2. `COMEÇAR ESTUDO Controllers e Services no NestJS`.
3. Peça pra conectar com banco: `EXPLIQUE como o Prisma se conecta ao PostgreSQL por baixo dos panos`.
4. Use `DESAFIO` pedindo cenários realistas: "cria um desafio de API que retorna 401 por engano".

## Python

O método é o mesmo, só que sem trilha dedicada — ele vai puxar do conhecimento geral dele.

1. `quero aprender Python do zero, meu objetivo é [dados / automação / backend com Django ou FastAPI]` — isso ajuda a direcionar o conteúdo certo.
2. `EXPLIQUE list comprehension` → `EXPLIQUE decorators` → `EXPLIQUE generators` (conceitos que costumam confundir iniciantes em Python).
3. Se o foco for dados: `COMEÇAR ESTUDO manipulação de dados com pandas`.
4. Se o foco for backend: `EXPLIQUE a diferença entre Flask, FastAPI e Django, e quando usar cada um`.
5. Peça exercícios realistas: `DESAFIO de debugging em uma função Python com erro de tipo`.

## Java / C# (orientação a objetos, backend corporativo)

1. `quero aprender Java (ou C#) focado em backend, sou iniciante em POO` — isso ajusta o ponto de partida.
2. `EXPLIQUE os 4 pilares de orientação a objetos com exemplos em Java` (ou C#).
3. `COMEÇAR ESTUDO Spring Boot` (Java) ou `COMEÇAR ESTUDO ASP.NET Core` (C#), se já tiver base de POO.
4. `EXPLIQUE injeção de dependência` — conceito que aparece em praticamente todo framework backend sério.
5. `CODE REVIEW` no seu código sempre que puder — em linguagens fortemente tipadas, os erros de arquitetura aparecem cedo se você revisar direito.

## Mobile (Kotlin/Swift) ou outras linguagens não listadas

O mentor não tem trilha pronta, mas o método se aplica igual:

1. Diga a linguagem e o objetivo logo de cara: `quero aprender Kotlin pra Android, sou iniciante`.
2. Use `EXPLIQUE [conceito]` normalmente — ele vai explicar com o mesmo rigor (o que é, por que existe, quando usar, erros comuns, exercício).
3. Para sintaxe muito recente ou específica de versão, ele deve avisar quando precisar confirmar algo em vez de inventar — se ele não fizer isso, desconfie e peça pra verificar na documentação oficial.
4. Siga o mesmo fluxo de `DESAFIO` → `CODE REVIEW` → `DEBUG` normalmente.

---

## Dica geral

Quanto mais específico o contexto que você dá (linguagem, nível, objetivo — "quero emprego júnior" é diferente de "quero automatizar tarefas do meu trabalho"), melhor ele calibra o nível dos exercícios e explicações. Vale repetir esse contexto no início de cada sessão nova, principalmente no Gemini e no NotebookLM, que não guardam progresso entre conversas tão bem quanto o Claude.
