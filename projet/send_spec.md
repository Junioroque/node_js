📱 App Context
Aplicação back-end para cadastro e organização da Copa do Mundo FIFA 2026.

Funcionalidades principais:

Cadastro de seleções e suas escalações.

Consulta de países e histórico de troféus por ano.

Organização de dados oficiais da competição.

Público alvo: administradores e organizadores da FIFA.

Escopo: API REST que servirá como base para futuros front-ends (web/mobile).

⚙️ Stack
Tech Stack
Backend: Node.js

Linguagem: TypeScript

Pacotes principais: Express, Zod (validação)

ORM: Drizzle

Banco de dados: SQLite (protótipo) → recomendação: Postgres em produção

Arch
Arquitetura Clean Architecture / Hexagonal para separar domínios, infraestrutura e aplicação.

Camadas:

Controllers → apenas entrada/saída HTTP.

Services → regras de negócio.

DTOs/Models → definição de dados.

Repositories → acesso ao banco.

Routes → organização das rotas.

📏 Guidelines
Code Patterns
Constantes em SCREAMING_SNAKE_CASE.

Nomes de arquivos em kebab-case.

Separação clara de camadas (sem regra de negócio em controllers).

app.ts separado de server.ts.

Uso de .env para dados sensíveis.

.gitignore configurado para evitar arquivos indevidos.

Evitar números hardcoded → usar constantes ou variáveis.

Database Patterns
Chaves primárias incrementais ou UUID.

Prefixo tbl em todas as tabelas.

Nomes de tabelas sempre no plural.

Índices para otimizar buscas.

Relacionamentos bem definidos (FKs entre seleções, jogadores, troféus).

API Patterns
Endpoints sempre versionados (/api/v1/...).

Endpoints sempre no plural.

Rotas organizadas em camada própria.

Evitar verbos nas rotas (usar métodos HTTP).

Hierarquia lógica para sub-recursos (/teams/123/players).

Resposta JSON padronizada:

json
{
  "success": true,
  "data": {
    "id": 123,
    "name": "maria@email.com"
  },
  "message": "Usuário recuperado com sucesso."
}
🛡️ Guardrails
Servidor local sempre na porta 3333.

Evitar ifs alinhados (usar funções auxiliares ou early return).

Nunca gerar código sem validar se faz sentido com o App Context.

Revisão obrigatória de PRs antes de merge.

Testes automatizados obrigatórios para novas features.

🔒 Segurança
Autenticação via JWT.

Autorização por roles (admin, user).

Proteção contra SQL Injection (ORM + validação Zod).

Rate limiting em endpoints críticos.

Logs de acesso e auditoria.

🧪 Testes
Testes unitários (Jest).

Testes de integração (Supertest).

Testes end-to-end opcionais.

Cobertura mínima de 80%.

📚 Documentação
Swagger/OpenAPI para documentação da API.

README detalhado com instruções de setup.

Diagramas de arquitetura e fluxo de dados.

📊 Observabilidade
Logs estruturados (Winston ou Pino).

Monitoramento de métricas (Prometheus).

Health-check endpoint (/health).

🌍 Internacionalização
Suporte a múltiplos idiomas (i18n).

Mensagens de erro e sucesso traduzíveis.

🚀 CI/CD
Pipeline de integração contínua (GitHub Actions).

Deploy automatizado em ambiente de staging.

Testes rodando em cada PR.

💡 Insights finais
Banco de dados: SQLite é ótimo para protótipo, mas Postgres seria mais adequado para produção.

Internacionalização: essencial para uma aplicação global da FIFA.

Segurança e autenticação: indispensável para proteger dados sensíveis.

Testes e CI/CD: garantem qualidade e estabilidade.

Observabilidade: health-check, logs e métricas ajudam na manutenção.

Documentação: Swagger + README tornam o projeto acessível para novos devs.