class LoginPage {
    visit() {
      cy.visit('https://manifestmovies.com/');
    }
  
    clickSignIn() {
      cy.get('.button').contains('Sign In').click();
    }
  
    enterUsername(username) {
      cy.get('#username').type(username);
    }
  
    enterPassword(password) {
      cy.get('#password').type(password);
    }
  
    clickLogin() {
      cy.get('button[type="submit"]').contains('Log in').click({ force: true });
    }
  
    checkLoginErrorMessage(expectedMessage) {
      cy.get('.woocommerce-error').should('contain.text', expectedMessage);
    }
  
    clickForgotPassword() {
      cy.contains('a', 'Lost your password?').click();
    }
  
    enterResetUsername(username) {
      cy.get('#user_login').type(username);
    }
  
    clickResetPassword() {
      cy.get('button').contains('Reset password').click();
    }
  
    checkResetSuccessMessage() {
      cy.get('h2').should('contain.text', 'A password reset email has been sent to the email address on file for your account');
    }
  
    clickCreateAccount() {
     // cy.contains('a', 'Create account').click();
     cy.visit('https://staging-3d60-christianmanifest.wpcomstaging.com/create-account/')
    }
  
    enterFirstName(firstName) {
      cy.get('#first_name').type(firstName);
    }
  
    enterLastName(lastName) {
      cy.get('#last_name').type(lastName);
    }
  
    enterRegUsername(username) {
      cy.get('#reg_username').type(username);
    }
  
    enterRegEmail(email) {
      cy.get('#reg_email').type(email);
    }
  
    enterRegPassword(password) {
      cy.get('#reg_password').type(password);
      cy.get('#reg_password2').type(password);
    }
  
    clickCreateAccountButton() {
      cy.get('.button').contains('Create Account').click({ force: true });
    }
  }
  
  export const loginPage = new LoginPage();
  