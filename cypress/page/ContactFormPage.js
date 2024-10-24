class ContactPage {
    visit() {
        cy.visit('https://manifestmovies.com/');
    }

    goToContactPage() {
        cy.get('.button').contains('Contact').click();
        cy.get('h1').should('contain.text', 'Contact Us');
        cy.url().should('include', 'contact');
    }

    fillContactForm(firstName, lastName, email, phone, comment) {
        cy.get('[placeholder="First Name"]').clear().type(firstName);
        cy.get('[name="last-name"]').clear().type(lastName);
        cy.get('[name="your-email"]').clear().type(email);
        cy.get('[name="your-tel"]').clear().type(phone);
        cy.get('[name="comment"]').clear().type(comment);
    }

    submitForm() {
        cy.get('.button').contains('Send').click();
    }

    visitSocialMedia(platform) {
        cy.get(`a[aria-label="visit Manifest Movies ${platform} account"]`)
          .invoke('removeAttr', 'target')
          .click();
    }
}

export default ContactPage;
    