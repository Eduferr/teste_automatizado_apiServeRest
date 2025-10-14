/// <reference types="cypress" />

const userActions = require("../../support/actions/userActions");

// Início da suíte de testes para funcionalidades relacionadas a usuários
describe('Autenticação de Usuário', () => {

  beforeEach(function () {
    cy.fixture('loginData').as('loginData');
  });

  it('Deve fazer login com sucesso usando classe de ação', function () {
    const { email, password } = this.loginData.dadosUsuario;

    userActions.login(email, password).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eql('Login realizado com sucesso'); // Valida mensagem de sucesso
      cy.log(response.body.authorization); // Mostra o token de autorização no log do Cypress
    });
  });  
});
