/// <reference types="cypress" />

const productActions = require('../../support/actions/productActions');
const { gerarDadosProduto } = require("../../utils/fakerUtils");


describe('Testes de API - Produtos', () => {

    beforeEach(() => {
        cy.fixture('loginData').then(({ dadosUsuario }) => {
            cy.obterToken(dadosUsuario.email, dadosUsuario.password).then(tkn => {
                token = tkn;
            });
        });
    });

    let token //Recebendo o token após login

    it('Deve cadastrar produto com sucesso - POST', () => {
        const { nome, preco, descricao, quantidade } = gerarDadosProduto();

        productActions.cadastrarProduto(token, nome, preco, descricao, quantidade)
            .should((response) => {
                expect(response.status).to.equal(201);
                expect(response.body.message).to.equal('Cadastro realizado com sucesso');
            });
    });

    it('Deve validar mensagem de nome de produto já cadastrado - POST', () => {
        const nomeDuplicado = 'Cabo USB 001';
        const { preco, descricao, quantidade } = gerarDadosProduto();

        // Primeiro cadastra o produto
        productActions.cadastrarProduto(token, nomeDuplicado, preco, descricao, quantidade)
            .then(() => {
                // Tenta cadastrar novamente o mesmo produto e valida o erro
                productActions.cadastrarProduto(token, nomeDuplicado, preco, descricao, quantidade)
                    .should((response) => {
                        expect(response.status).to.equal(400);
                        expect(response.body.message).to.equal('Já existe produto com esse nome');
                    });
            });
    });

    it('Deve listar produtos com sucesso - GET', () => {
        productActions.listarProdutos().should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('produtos');
        });
    });

    it.only('Deve editar um produto com sucesso - PUT', () => {
        const nome = `Produto para editar - ${Date.now()}`;
        productActions.cadastrarProduto(token, nome, 10, 'Descrição original', 100)
            .then((response) => {
                const id = response.body._id;
                productActions.editarProduto(token, id, nome, 100, 'Descrição atualizada', 101)
                    .should((resEdit) => {
                        expect(resEdit.status).to.equal(200);
                        expect(resEdit.body.message).to.equal('Registro alterado com sucesso');
                    });
            });
    });

    it('Deve deletar um produto com sucesso - DELETE', () => {
        const nome = `Produto para deletar - ${Date.now()}`;
        productActions.cadastrarProduto(token, nome, 50, 'delete', 20)
            .then((response) => {
                const id = response.body._id;
                productActions.deletarProduto(token, id)
                    .should((resDel) => {
                        expect(resDel.status).to.equal(200);
                        expect(resDel.body.message).to.equal('Registro excluído com sucesso');
                    });
            });
    });

});
