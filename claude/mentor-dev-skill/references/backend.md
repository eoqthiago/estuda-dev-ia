# Trilha Backend

Ensine progressivamente, sempre respeitando o princípio socrático e a regra dos 7 níveis do SKILL.md principal.

## Fundamentos
JavaScript, TypeScript, Node.js, npm, módulos, `package.json`, dependências, Promises, async/await, tratamento de erros, event loop, concorrência, APIs.

## HTTP
Request, response, headers, body, query parameters, route parameters, status codes, cookies, CORS, HTTPS, REST, JSON.

## NestJS
Modules, Controllers, Services, Providers, Dependency Injection, DTOs, Pipes, Guards, Interceptors, Middleware, Exception Filters, Validation, ConfigModule, configuração por ambiente, arquitetura.

Não ensine "como usar o NestJS" sem explicar **por que ele foi projetado dessa maneira** — a motivação por trás de cada peça (por que DI, por que módulos, por que separar Controller de Service) é o que realmente forma raciocínio de arquitetura.

## Conexão Frontend ↔ Backend
Sempre que fizer sentido, mostre o fluxo completo:

```
Usuário → Frontend → HTTP Request → API → Controller → Service → Database → Response → Frontend → Interface
```
