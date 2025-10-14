# 🧪 Testes Automatizados – API ServeRest

Este projeto tem como objetivo **validar o funcionamento da API ServeRest** por meio de **testes automatizados de API**, abordando **validação funcional e de contrato**.  
Os testes cobrem os endpoints de **usuários e produtos**, além do processo de login, garantindo que todas as rotas estejam operando conforme o esperado.

---

## ⚙️ Escopo dos Testes

### 👤 Usuários

| Método | Endpoint          | Descrição                            |
| :----: | ----------------- | ------------------------------------ |
|   GET  | `/usuarios`       | Listar todos os usuários cadastrados |
|  POST  | `/usuarios`       | Cadastrar novo usuário               |
|   PUT  | `/usuarios/{_id}` | Editar usuário existente             |
| DELETE | `/usuarios/{_id}` | Excluir usuário                      |

### 🛍️ Produtos

| Método | Endpoint          | Descrição                   |
| :----: | ----------------- | --------------------------- |
|   GET  | `/produtos`       | Listar produtos cadastrados |
|  POST  | `/produtos`       | Cadastrar novo produto      |
|   PUT  | `/produtos/{_id}` | Editar produto existente    |
| DELETE | `/produtos/{_id}` | Excluir produto             |

---

## 🎯 Objetivos dos Testes

1. **Validação funcional** → Garante que cada rota realiza corretamente as operações de CRUD.  
2. **Validação de contrato** → Assegura que as respostas JSON estão em conformidade com o contrato definido via **JSON Schema**.  
3. **Validação de status e mensagens** → Verifica se os códigos de status HTTP e mensagens retornadas estão corretos em cenários de sucesso e erro.

---

## ✅ Critérios de Sucesso

- Status HTTP coerentes (200, 201, 400, 404);  
- Estrutura JSON conforme o contrato (schema validado via Joi);  
- Criação, edição e exclusão persistindo corretamente;  
- IDs válidos e únicos;  
- Mensagens de erro padronizadas e consistentes.

---

## 🧱 Estrutura de Pastas
```bash
teste_automatizado_apiServeRest/
│
├── cypress/
│   ├── e2e/
│   │   └── api/
│   │       ├── productsTest.cy.js         # Testes de API de produtos
│   │       └── usersTest.cy.js            # Testes de API de usuários
│   │
│   ├── fixtures/
│   │   └── loginData.json                 # Dados fixos de login
│   │
│   ├── schemas/
│   │   ├── productsSchema.js              # Schema de validação para produtos
│   │   └── usersSchema.js                 # Schema de validação para usuários
│   │
│   ├── support/
│   │   ├── actions/                       # Métodos de ações e comandos reutilizáveis
│   │   │   ├── productActions.js
│   │   │   └── userActions.js
│   │   ├── commands.js                    # Comandos customizados do Cypress
│   │   └── e2e.js                         # Arquivo principal de suporte
│   │
│   └── utils/
│       └── fakerUtils.js                  # Geração de dados dinâmicos (faker)
│
├── cypress.config.js                      # Configurações globais do Cypress
├── package.json                           # Dependências e scripts do projeto
├── package-lock.json
└── README.md
```

---

## 🧩 Tecnologias Utilizadas

| Tecnologia    | Finalidade                                        |
| ------------- | ------------------------------------------------- |
| **Node.js**   | Ambiente de execução para o projeto               |
| **npm**       | Gerenciador de pacotes                            |
| **Cypress**   | Framework de testes automatizados                 |
| **Faker.js**  | Geração de dados dinâmicos (nomes, e-mails, etc.) |
| **Joi**       | Validação de contratos (schemas JSON)             |
| **ServeRest** | API simulada utilizada nos testes                 |

---

## 💻 Pré-requisitos

Antes de rodar os testes, é necessário ter instalado:
- Node.js (versão 18 ou superior)
- npm (instalado junto com o Node)
- ServeRest instalado localmente

---

## ⚙️ Instalação e Configuração

|  Etapa  |  Descrição | Comando |
|:--------|:-----------|:--------|
| **1️⃣ Clonar o repositório** | Clona o projeto para o diretório local | `git clone https://github.com/seuusuario/teste_automatizado_apiServeRest.git` |
| **2️⃣ Acessar o diretório do projeto** | Entra na pasta do projeto | `cd teste_automatizado_apiServeRest` |
| **3️⃣ Iniciar o projeto e instalar dependências** | Cria o `package.json` e instala as dependências básicas | `npm init -y` <br> `npm install` |
| **4️⃣ Instalar o Cypress** | Instala o framework de testes | `npm install -D cypress` |
| **5️⃣ Instalar o Faker.js** | Gera dados dinâmicos (nomes, e-mails, etc.) | `npm install @faker-js/faker` |
| **6️⃣ Instalar o Joi** | Faz a validação de contratos (schemas JSON) | `npm install joi` |
| **7️⃣ Instalar o ServeRest (globalmente)** | API simulada utilizada nos testes | `npm install -g serverest` |
| **8️⃣ Iniciar o ServeRest localmente** | Inicia o servidor local da API | `serverest` |
|  |  | 🔸 O ServeRest rodará em: **http://localhost:3000** |

---

## 🚀 Execução dos Testes

| Modo | Descrição | Comando |
|:-----|:-----------|:--------|
| **Interativo (GUI)** | Abre o painel do Cypress para visualizar os testes em execução | `npx cypress open` |
| **Headless (terminal)** | Executa todos os testes diretamente no terminal | `npx cypress run` |
| **Executar um teste específico** | Executa apenas o arquivo indicado | `npx cypress run --spec "cypress/e2e/api/usersTest.cy.js"` |
| **Rodar com logs detalhados** | Mostra mais informações no terminal durante a execução | `npx cypress run --browser chrome --headed` |

---

## 🧠 Boas Práticas Implementadas

- Arquitetura modular e organizada (actions, schemas, fixtures e utils);
- Geração dinâmica de dados com Faker.js;
- Validação de contrato com Joi para respostas consistentes;
- Testes reutilizáveis e padronizados;
- Execução automatizada via CLI (suporte para CI/CD).

---

## ✍️ Assinatura do QA

**Eduardo Ferreira**  
*Analista de testes*  
🔗 *Automação de Testes | API | Cypress | JavaScript*  
📅 Projeto desenvolvido para fins educacionais e de prática em automação de testes.

---

