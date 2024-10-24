/// <reference types="cypress"/>
import { loginPage } from '../page/LoginPage';

describe('Testing Login form for the website', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('A user can login via their email address used to create their account', () => {
    loginPage.clickSignIn();
    loginPage.enterUsername('jester1337');
    loginPage.enterPassword('zxcv1234');
    loginPage.clickLogin();
  });

  it('A user can recover password if they forgot their email address', () => {
    loginPage.clickSignIn();
    loginPage.clickForgotPassword();
    loginPage.enterResetUsername('jester1337');
    loginPage.clickResetPassword();
    loginPage.checkResetSuccessMessage();
  });

  it('A user cannot register if they have not made a purchase', () => {
    loginPage.clickSignIn();
    loginPage.clickCreateAccount();
    loginPage.enterFirstName('Jason');
    loginPage.enterLastName('Statham');
    loginPage.enterRegUsername('sigma1337');
    loginPage.enterRegEmail('jesterstd2004@gmail.com');
    loginPage.enterRegPassword('zxcv1234');
    loginPage.clickCreateAccountButton();
  
  });

  it('A user is informed if they put the wrong email address to login', () => {
    loginPage.clickSignIn();
    loginPage.enterUsername('max.palamar4uck2004@gmail.');
    loginPage.enterPassword('zxcv1234');
    loginPage.clickLogin();
    loginPage.checkLoginErrorMessage('The username max.palamar4uck2004@gmail. is not registered on this site');
  });

  it('A user is informed if they put the wrong password to login', () => {
    loginPage.clickSignIn();
    loginPage.enterUsername('jester1337');
    loginPage.enterPassword('zxcv123');
    loginPage.clickLogin();
    loginPage.checkLoginErrorMessage('The password you entered for the username jester1337 is incorrect.');
  });
});
