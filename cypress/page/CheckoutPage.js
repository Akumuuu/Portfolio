class CheckoutPage {
    visit() {
        cy.visit('https://staging-3d60-christianmanifest.wpcomstaging.com/');
    }

    completePurchaseFlow() {
        cy.get('.dropdown__button').contains('Products').click();
        cy.contains('p', 'The enVision Board Set').click();
        cy.get('.add_to_cart_button').contains('Buy Now').click();
    }

    userDataForCheckout() {
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
    }

    waitForThankYouPage() {
        cy.wait(4000);
        cy.contains('Thank You').should('be.visible');
    }
}

export default CheckoutPage;
