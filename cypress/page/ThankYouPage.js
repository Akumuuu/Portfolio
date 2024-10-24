class ThankYouPage {
    checkAccountCreationVisible() {
        cy.contains('Create your account').should('be.visible');
    }

    createAccount(firstName, lastName, username, email, password) {
        cy.get('#first_name').clear().type(firstName);
        cy.get('#last_name').clear().type(lastName);
        cy.get('#reg_username').clear().type(username);
        cy.get('#reg_email').clear().type(email);
        cy.get('#reg_password').clear().type(password);
        cy.get('#reg_password2').clear().type(password);
        cy.get('.button').contains('Create Account').click();
    }

    loginWithEmail(email, password) {
        cy.get('.button--secondary').contains('Sign In').click()
        cy.get('#username').type(email);
        cy.get('#password').type(password);
        cy.get('.button').contains('Log in').click();
    }
}

export default ThankYouPage;
