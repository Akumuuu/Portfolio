// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('completePurchaseFlow', () => {
    
  cy.get('.dropdown__button ').contains('Products').click()
  cy.contains('p', 'The enVision Board Set').click();
  cy.get('.add_to_cart_button').contains('Buy Now').click()
  });

  Cypress.Commands.add('userDataForCheckout',()=>{
    cy.get('#billing_first_name').type('Paul');
    cy.get('#billing_last_name').type('Walker');
    cy.get('#billing_email').type('max.palamar4uck2004@gmail.com');
    cy.get('#billing_phone').type('14844732462');
    cy.get('#select2-billing_country-container').should('contain.text', 'United States (US)');
    cy.get('#billing_address_1').type('Elm Street');

     
    cy.get('#select2-billing_state-container').click();
    cy.get('.select2-results__option').contains('Alaska').click();

  
    cy.get('#billing_city').type('Adak');
    cy.get('#billing_postcode').type('99501');
    cy.getIframeBody('#stripe-card-number > div > iframe').within(() => {
      cy.get('input[name="cardnumber"]').type('4242424242424242');
    });
    cy.getIframeBody('#stripe-exp > div > iframe').within(() => {
      cy.get('input[name="exp-date"]').type('03/33');
    });
    cy.getIframeBody('#stripe-cvv > div > iframe').within(() => {
      cy.get('input[name="cvc"]').type('666');
    });

      cy.get('#place_order').click()

  })
  Cypress.Commands.add('dataForCheckoutWithoutUSA',()=>{
    cy.get('#billing_first_name').type('Paul');
    cy.get('#billing_last_name').type('Walker');
    cy.get('#billing_email').type('max.palamar4uck2004@gmail.com');
    cy.get('#billing_phone').type('14844732462');
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-results__option').contains('United Arab Emirates').click()
    cy.get('#billing_address_1').type('Elm Street');

     
    cy.get('#billing_state').type('test')
    cy.get('#billing_city').type('Dubai')
    cy.getIframeBody('#stripe-card-number > div > iframe').within(() => {
      cy.get('input[name="cardnumber"]').type('4242424242424242');
    });
    cy.getIframeBody('#stripe-exp > div > iframe').within(() => {
      cy.get('input[name="exp-date"]').type('03/33');
    });
    cy.getIframeBody('#stripe-cvv > div > iframe').within(() => {
      cy.get('input[name="cvc"]').type('666');
      
    });
    
    cy.get('#place_order').click();
    cy.get('body').should('contain.text','Unfortunately we do not ship to the AE')

  
    
  })

  Cypress.Commands.add('LogInFormHandling',()=>{
    cy.get('.button').contains('Sign In').click()
           cy.get('h2').should('contain.text','Log In')
           cy.get('#username').type('Bones1234')
           cy.get('#password').type('zxcv1234')
           cy.get('button[type="submit"]').contains('Log in').click({force:true})
  })
  Cypress.Commands.add('LogInFormHandlingWithEmail',()=>{
    cy.get('.button').contains('Sign In').click()
           cy.get('h2').should('contain.text','Log In')
           cy.get('#username').type('jestestd20042304@gmail.com')
           cy.get('#password').type('zxcv1234')
           cy.get('button[type="submit"]').contains('Log in').click({force:true})
  })

  Cypress.Commands.add('getIframeBody', (selector) => {
    return cy
      .get(selector) 
      .its('0.contentDocument.body').should('not.be.empty') 
      .then(cy.wrap); 
  });
  