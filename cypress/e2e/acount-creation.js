/// <reference types = "cypress"/>
import CheckoutPage from '../page/CheckoutPage';
import ThankYouPage from '../page/ThankYouPage';

const checkoutPage = new CheckoutPage();
const thankYouPage = new ThankYouPage();

describe('Testing account creation', () => {
    beforeEach(() => {
        checkoutPage.visit();
    });

    it('A user is shown a Thank You page after checkout', () => {
        checkoutPage.completePurchaseFlow();
        checkoutPage.userDataForCheckout();
        checkoutPage.waitForThankYouPage();
    });

    it('A user can create their account after checkout on the Thank You page if they are a new user', () => {
        checkoutPage.completePurchaseFlow();
        checkoutPage.userDataForCheckout();
        checkoutPage.waitForThankYouPage();

        thankYouPage.checkAccountCreationVisible();
        thankYouPage.createAccount('John', 'Jones', 'Bones1234', 'jestestd20042304@gmail.com', 'zxcv1234');
    });

    it('A user can sign in if they are an existing user after checkout', () => {
        checkoutPage.completePurchaseFlow();
        checkoutPage.userDataForCheckout();
        checkoutPage.waitForThankYouPage();
        thankYouPage.loginWithEmail('Bones1234', 'zxcv1234');
    });

    it('The username of the user to login is their email address', () => {
        checkoutPage.completePurchaseFlow();
        checkoutPage.userDataForCheckout();
        checkoutPage.waitForThankYouPage();
        thankYouPage.loginWithEmail('jestestd20042304@gmail.com', 'zxcv1234');
    });
});
