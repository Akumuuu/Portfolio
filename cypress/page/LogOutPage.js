class LogoutPage {
    visit() {
        cy.visit('https://staging-3d60-christianmanifest.wpcomstaging.com/');
    }

    login(username, password) {
        cy.get('.button').contains('Sign In').click();
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button[type="submit"]').contains('Log in').click({ force: true });
    }

    clickLogout() {
        cy.contains('span', 'Log Out').click({ force: true });
    }

    checkLoggedOut() {
        cy.url().should('include', 'my-account');
    }

    checkLogoutNotVisible() {
        cy.contains('Log Out').should('not.exist');
    }
}

export default LogoutPage;
