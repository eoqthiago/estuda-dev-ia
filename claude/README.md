# Mentor Dev — versão para Claude (Skill)

Essa é a versão mais completa: uma **skill** de verdade, com o método de mentoria e trilhas de conteúdo separadas por arquivo (carregadas só quando relevante).

## Opção A — claude.ai (chat, celular ou desktop)

1. Baixe o arquivo `mentor-dev.skill` (está nesta mesma pasta).
2. No claude.ai, vá em **Settings → Capabilities** e ative **"Code execution and file creation"** (obrigatório pra skills funcionarem).
3. Vá em **Settings → Skills** (ou **Customize → Skills**).
4. Clique em **"+ Add skill" / "Upload skill"** e selecione o arquivo `mentor-dev.skill`.
5. Confirme que o toggle da skill está ligado.
6. Abra uma conversa nova e mande algo como "quero começar uma sessão de estudo" — o Claude detecta e ativa a skill sozinho.

> A skill fica privada na sua conta. Cada pessoa que quiser usar precisa repetir esses passos com o próprio arquivo `.skill`.

## Opção B — Claude Code (VSCode, terminal, JetBrains)

Você tem dois jeitos, escolha o mais fácil pra você:

**Caminho rápido:** copie a pasta `mentor-dev-skill/` (está aqui do lado, já vem pronta) e cole ela em `~/.claude/skills/`, renomeando pra `mentor-dev/`.

**Caminho pelo .skill:** baixe e **extraia** o arquivo `mentor-dev.skill` (ele é um `.zip` com outro nome — se o Windows não abrir direto, renomeie pra `.zip` primeiro). Isso gera a mesma pasta `mentor-dev/` com `SKILL.md` e `references/` dentro.

Depois, em qualquer um dos dois caminhos:

1. Coloque a pasta `mentor-dev/` em:
   - `~/.claude/skills/mentor-dev/` — pra usar em qualquer projeto seu, ou
   - `.claude/skills/mentor-dev/` dentro de um repositório — pra versionar e compartilhar com quem clonar aquele projeto.
2. Reinicie o Claude Code (sessão nova) se você acabou de criar a pasta de skills.
3. Teste com "quero começar uma sessão de estudo" ou `/mentor-dev`.

## O que tem dentro

- `SKILL.md` — núcleo: princípio socrático, comandos (`COMEÇAR ESTUDO`, `EXPLIQUE`, `REVISÃO`, `DESAFIO`, `CODE REVIEW`, `DEBUG`, `PRECISO DO CODIGO`), regra dos 7 níveis, sistema de avaliação, regra de nunca inventar/sempre buscar links reais.
- `references/frontend.md`, `backend.md`, `database-prisma.md`, `git-docker-testes-seguranca.md`, `projetos-simulacao-entrevistas.md` — trilha funda para JavaScript/TypeScript/React/Node/NestJS/PostgreSQL. Pra outras linguagens, a skill aplica o mesmo método usando conhecimento geral.
