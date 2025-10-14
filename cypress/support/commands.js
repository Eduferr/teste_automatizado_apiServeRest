
// ***********************************************
// Obter token via API, para ser usado em outros testes
// ***********************************************
Cypress.Commands.add('obterToken', (email, senha) => {
  cy.request({
    method: 'POST',
    url: 'login',
    body: {
      email,
      password: senha
    }
  }).then(res => {
    return res.body.authorization;
  });
});