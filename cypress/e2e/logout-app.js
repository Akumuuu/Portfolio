/// <reference types="cypress"/>

import LogoutPage from '../page/LogOutPage';  

describe('Testing Logout', () => {
    const logoutPage = new LogoutPage();  

    beforeEach(() => {
        logoutPage.visit();
    });

    it('A user can logout if logged in', () => {
        logoutPage.login('Bones1234', 'zxcv1234');  
        logoutPage.clickLogout();  
        logoutPage.checkLoggedOut();  
    });

    it('A user cannot log out if they are not logged in', () => {
        cy.get('.button').contains('Sign In').click();  
        logoutPage.checkLogoutNotVisible();  
    });
});
