/// <reference types="cypress" />

const userActions = require("../../support/actions/userActions");
const { gerarDadosUsuario } = require("../../utils/fakerUtils");
const usersSchema = require('../../schemas/usersSchema');

// Início da suíte de testes para funcionalidades relacionadas a usuários
describe('Suite de Teste - Funcionalidades Usuários', () => {

  //this não funciona como esperado dentro de arrow functions (() => {}), por isso usamos function() {}
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


  it('Deve cadastrar um usuário com sucesso', () => {
    const { nomeCompleto, email, senha, admin } = gerarDadosUsuario();

    userActions.cadastrarUsuario(nomeCompleto, email, senha, admin)
      .should((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Cadastro realizado com sucesso');
      });
  });


  it('Deve validar um usuário com email inválido', () => {
    const { nomeCompleto, email, senha, admin } = gerarDadosUsuario(); //gerando o objeto com dados do usuário

    userActions.cadastrarUsuario(nomeCompleto, email, senha, admin) // Primeiro cadastro para garantir que o email já existe
      .then(() => {
        // Tenta cadastrar novamente com o mesmo email (espera erro)
        userActions.cadastrarUsuario(nomeCompleto, email, senha, admin)
          .should((response) => { // Valida que o status é 400 e a mensagem de erro
            expect(response.status).to.equal(400);
            expect(response.body.message).to.equal('Este email já está sendo usado');
          });
      });
  });

  it('Deve listar usuários cadastrados', () => {
    userActions.getUsuarios().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('quantidade');
      expect(response.body).to.have.property('usuarios');
      cy.log(`Total de usuários: ${response.body.quantidade}`);
    });
  });


  it('Deve deletar um usuário previamente cadastrado', () => {
    const { nomeCompleto, email, senha, admin } = gerarDadosUsuario();

    userActions.cadastrarUsuario(nomeCompleto, email, senha, admin)
      .then((res) => {
        const id = res.body._id;

        userActions.deletarUsuario(id)
          .should((resDel) => {
            expect(resDel.status).to.equal(200);
            expect(resDel.body.message).to.equal('Registro excluído com sucesso');
          });
      });
  });


  it('Deve validar contrato de usuários', () => {

    cy.request('usuarios').then(response => {
      return usersSchema.validateAsync(response.body)
    })
  });


});
