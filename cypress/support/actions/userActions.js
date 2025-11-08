
const FakerUtils = require('../../utils/fakerUtils');

class userActions {

    login(email, password) {
        return cy.request({
            method: 'POST',
            url: '/login',
            body: {
                email,
                password
            }
        });
    }

    cadastrarUsuario(nome, email, senha, admin) {
        return cy.request({
            method: 'POST',
            url: '/usuarios', // Altere a URL conforme sua API
            body: {
                nome,
                email,
                password: senha,
                administrador: admin
            },
            failOnStatusCode: false // Para capturar erros no teste
        });
    }

    getUsuarios() {
        return cy.request({
            method: 'GET',
            url: '/usuarios',
        });
    }

    deletarUsuario(id) {
        return cy.request({
            method: 'DELETE',
            url: `/usuarios/${id}`,
            failOnStatusCode: false
        });
    }
}
module.exports = new userActions();