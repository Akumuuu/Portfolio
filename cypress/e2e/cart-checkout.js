/// <reference types="cypress"/>

import CartPage from '../page/CartPage';

describe('Testing Cart and Checkout for the website', () => {
    const cartPage = new CartPage();  

    beforeEach(() => {
        cartPage.visit();
    });

    it('A user visits the home page and is able to click the main CTA button to take them to the products page.', () => {
        cartPage.clickViewProducts(); 
        cy.url().should('include', '/products');
        cy.get('h1').should('contain', 'Products');
    });

    it('A user visits the home page and is able to click on drop-down menu Products and select enVision Board and add in cart', () => {
        cartPage.selectEnvisionBoard();  
    });

    it.only('A user may not be able to add more than one product at a time to their cart', () => {
        cartPage.selectEnvisionBoard();  
        cartPage.verifyCartItemCount('1'); 
       // cartPage.clickBack();  
        cartPage.selectEnvisionBoardAndVerifyError();
    cy.wait(5000) 
        cartPage.verifyAddToCartError();  
    });

    it('A user can remove a product from their cart and add a different product', () => {
        cartPage.selectEnvisionBoard();  
        cartPage.verifyCartItemCount('1'); 
        cartPage.removeProductFromCart();  
    });

    it('A user that has an enVision board in their cart is able to checkout successfully with the Credit Card', () => {
        cartPage.selectEnvisionBoard();  
        cartPage.enterUserDataForCheckout();  
    });

    it('A user that has an enVision board in their cart is able to checkout successfully with the PayPal', () => {
        cartPage.selectEnvisionBoard();  
        cartPage.checkoutWithPaymentMethod('payment_method_ppcp');  
    });

    it('A user that has an enVision board in their cart is able to checkout successfully with the Google Pay', () => {
        cartPage.selectEnvisionBoard();  
        cartPage.checkoutWithPaymentMethod('payment_method_stripe_googlepay');
    });

    it('A user that has an enVision board in their cart is able to checkout successfully with the afterpay', () => {
        cartPage.selectEnvisionBoard();  
        cartPage.checkoutWithPaymentMethod('payment_method_stripe_afterpay');  
    });

    it('A user that has an enVision board in their cart is able to checkout successfully with the affirm', () => {
        cartPage.selectEnvisionBoard(); 
        cartPage.checkoutWithPaymentMethod('payment_method_stripe_affirm');  
    });

    it('A user can only enter a United States address for Shipping Address', () => {
        cartPage.selectEnvisionBoard();  
        cartPage.enterDataForCheckoutWithoutUSA();  
    });
});
