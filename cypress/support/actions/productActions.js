
class ProductActions {
    
    cadastrarProduto(token, nome, preco, descricao, quantidade) {
        return cy.request({
            method: 'POST',
            url: 'produtos',
            headers: { authorization: token },
            body: {
                nome,
                preco,
                descricao,
                quantidade
            },
            failOnStatusCode: false
        });
    }

    editarProduto(token, id, nome, preco, descricao, quantidade) {
        return cy.request({
            method: 'PUT',
            url: `produtos/${id}`,
            headers: { authorization: token },
            body: {
                nome,
                preco,
                descricao,
                quantidade
            },
            failOnStatusCode: false
        });
    }

    deletarProduto(token, id) {
        return cy.request({
            method: 'DELETE',
            url: `produtos/${id}`,
            headers: { authorization: token },
            failOnStatusCode: false
        });
    }

    listarProdutos() {
        return cy.request({
            method: 'GET',
            url: 'produtos',
            failOnStatusCode: false
        });
    }
}

module.exports = new ProductActions();
