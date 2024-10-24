/// <reference types = "cypress"/>
import ContactPage from '../page/ContactFormPage';

const contactPage = new ContactPage();

describe('Testing Contact Form', () => {
    beforeEach(() => {
        contactPage.visit();
    });

    it('A user can visit Contact page', () => {
        contactPage.goToContactPage();
    });

    it('User can Fill out the contact information and submit', () => {
        contactPage.goToContactPage();
        contactPage.fillContactForm('Max', 'Palamar', 'jesterstd2004@gmail.com', '380983212332', 'test comment');
        contactPage.submitForm();
    });

    it('A user can view the Social Media links (Instagram)', () => {
        contactPage.goToContactPage();
        contactPage.visitSocialMedia('Instagram');
    });

    it('A user can view the Social Media links (Facebook)', () => {
        contactPage.goToContactPage();
        contactPage.visitSocialMedia('Facebook');
    });

    it('A user can view the Social Media links (Youtube)', () => {
        contactPage.goToContactPage();
        contactPage.visitSocialMedia('YouTube');
    });

    it('A user can view the Social Media links (TikTok)', () => {
        contactPage.goToContactPage();
        contactPage.visitSocialMedia('TikTok');
    });
});
