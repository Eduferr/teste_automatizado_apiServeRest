// loginActions.js

class LoginAction {
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
}
module.exports = new LoginAction();