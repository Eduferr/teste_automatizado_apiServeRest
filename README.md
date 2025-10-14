# 🧪 Teste Automatizado – API ServeRest

Como prática de estudo, esta automatização tem como objetivo validar o funcionamento da API ServeRest por meio de testes funcionais e de contrato. Serão verificados os endpoints relacionados a operações de **CRUD de usuários e produtos**, bem como o processo de login, assegurando que todas as rotas estejam operando conforme o esperado. Além disso, as respostas da API serão validadas para garantir que estejam em conformidade com a estrutura e o conteúdo definidos no contrato da aplicação.

---

## ⚙️ Escopo dos Testes

### 👤 Usuários

| Método | Endpoint          | Descrição                            |
| :----: | ----------------- | ------------------------------------ |
|   GET  | `/usuarios`       | Listar todos os usuários cadastrados |
|  POST  | `/usuarios`       | Cadastrar novo usuário               |
|   GET  | `/usuarios/{_id}` | Buscar usuário por ID                |
|   PUT  | `/usuarios/{_id}` | Editar usuário existente             |
| DELETE | `/usuarios/{_id}` | Excluir usuário                      |

### 🛍️ Produtos

| Método | Endpoint          | Descrição                   |
| :----: | ----------------- | --------------------------- |
|   GET  | `/produtos`       | Listar produtos cadastrados |
|  POST  | `/produtos`       | Cadastrar novo produto      |
|   GET  | `/produtos/{_id}` | Buscar produto por ID       |
|   PUT  | `/produtos/{_id}` | Editar produto existente    |
| DELETE | `/produtos/{_id}` | Excluir produto             |

---

### 🎯 Objetivos dos testes
 
1. **Validação funcional** → Verificar se cada rota retorna o comportamento esperado e realiza corretamente as operações de CRUD.
2. **Validação de contrato** → Confirmar se o formato da resposta JSON está de acordo com o contrato definido (campos obrigatórios, tipos de dados e estrutura).
3. **Validação de status e mensagens** → Garantir que os status codes HTTP e mensagens retornadas sejam coerentes tanto em casos de sucesso quanto de erro.

---

### ✅ Critérios de Sucesso

- Retorno correto dos status HTTP (200, 201, 400, 404);
- Estrutura JSON válida e conforme o contrato;
- Criação, edição e exclusão de dados persistindo corretamente;
- IDs válidos e únicos;
- Mensagens de erro claras e padronizadas;
- Contrato validado automaticamente via schema (JSON Schema).

---

### 🧩 Tecnologias Utilizadas

- Node.js
- npm
- Cypress – para execução dos testes de API

---

### 🧱Estrutura de Pastas (Sugerida)

```bash
teste_automatizado_apiServeRest/
│
├── cypress/
│   ├── e2e/
│   │   ├── contratos/                     # Testes de contrato (validação de schema JSON)
│   │   │   ├── produtoContrato.cy.js
│   │   │   └── usuarioContrato.cy.js
│   │   │
│   │   ├── produtos/                      # Testes relacionados aos endpoints de produtos
│   │   │   ├── deleteProdutos.cy.js
│   │   │   ├── getProdutos.cy.js
│   │   │   ├── postProdutos.cy.js
│   │   │   └── putProdutos.cy.js
│   │   │
│   │   └── usuarios/                      # Testes relacionados aos endpoints de usuários
│   │       ├── deleteUsuarios.cy.js
│   │       ├── getUsuarios.cy.js
│   │       ├── postUsuarios.cy.js
│   │       └── putUsuarios.cy.js
│   │
│   ├── fixtures/                          # Armazena dados estáticos e schemas JSON
│   │   └── schemas/
│   │       ├── produtosSchema.json
│   │       └── usuariosSchema.json
│   │
│   ├── support/                           # Comandos e configurações globais do Cypress
│   │   └── commands.js
│   │
│   └── cypress.config.js                  # Configurações do Cypress (baseUrl, viewport, etc.)
│
├── node_modules/                          # Dependências instaladas pelo npm
├── package.json                           # Configurações, scripts e dependências do projeto
├── package-lock.json                      # Controle de versão das dependências
└── README.md                              # Documentação do projeto

```

---

 ### 🚀 Execução dos Testes

- **Instalar dependências** → npm install
- **Instalar dependências para Cucumber** → npm install --save-dev @badeball/cypress-cucumber-preprocessor
- **Instalar cypress** → npm install -D cypress
- **Executar testes de API** → npx cypress open
- **Executar no modo interativo (modo headless)** → npx cypress run
