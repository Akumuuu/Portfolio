class CartPage {
    visit() {
        cy.visit('https://staging-3d60-christianmanifest.wpcomstaging.com/');
    }

    clickViewProducts() {
        cy.get(".button").contains('View Products').click();
    }

    selectEnvisionBoard() {
        cy.get('.dropdown__button').contains('Products').click();
        cy.contains('p', 'The enVision Board Set').click({force:true});
        cy.get('.add_to_cart_button').contains('Buy Now').click();
    }
    selectEnvisionBoardAndVerifyError() {
        cy.get('.dropdown__button').contains('Products').click({force:true});
        cy.contains('p', 'The enVision Board Set').click({force:true});
    
    }
    
    verifyCartItemCount(expectedCount) {
        cy.get('.cart-items-amout-indicator').eq(0).should('have.text', expectedCount);
    }

    clickBack() {
        cy.get("a[aria-label='go back']").contains('Back').click();
    }

    verifyAddToCartError() {
        cy.get('span.button.button--secondary.w-full')
          .should('be.visible')
          .and('contain.text', "You can't add more than one product to your cart.");
    }

    removeProductFromCart() {
        cy.get('.dropdown').contains('Cart').click();
        cy.get('img[alt="delete"]').eq(0).click({force:true});
    }

    checkoutWithPaymentMethod(paymentMethod) {
        cy.get(`[data-payment-method="${paymentMethod}"]`).click();
    }

    enterUserDataForCheckout() {
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

        this.enterCardDetails();
        
        cy.get('#place_order').click();
    }

    enterCardDetails() {
        cy.getIframeBody('#stripe-card-number > div > iframe').within(() => {
            cy.get('input[name="cardnumber"]').type('4242424242424242');
        });
        cy.getIframeBody('#stripe-exp > div > iframe').within(() => {
            cy.get('input[name="exp-date"]').type('03/33');
        });
        cy.getIframeBody('#stripe-cvv > div > iframe').within(() => {
            cy.get('input[name="cvc"]').type('666');
        });
    }

    // Метод для оформлення замовлення без США
    enterDataForCheckoutWithoutUSA() {
        cy.get('#billing_first_name').type('Paul');
        cy.get('#billing_last_name').type('Walker');
        cy.get('#billing_email').type('max.palamar4uck2004@gmail.com');
        cy.get('#billing_phone').type('14844732462');
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-results__option').contains('United Arab Emirates').click();
        cy.get('#billing_address_1').type('Elm Street');
        cy.get('#billing_state').type('test');
        cy.get('#billing_city').type('Dubai');

        this.enterCardDetails();
        
        cy.get('#place_order').click();
        cy.get('body').should('contain.text', 'Unfortunately we do not ship to the AE');
    }
}

export default CartPage;
