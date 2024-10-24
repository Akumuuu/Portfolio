/// <reference types = "cypress"/>
import AboutPage from '../page/AboutPage';

const aboutPage = new AboutPage();

describe('Testing About Menu', () => {
    beforeEach(() => {
        aboutPage.visit();
    });

    it('A user can click on About menu dropdown', () => {
        aboutPage.clickAboutUsMenu();
    });

    it('User is able to select Our Story section from dropdown menu', () => {
        aboutPage.selectOurStory();
    });

    it('User is able to select Our Values section from dropdown menu', () => {
        aboutPage.selectOurValues();
    });

    it('A user can visit How does the Science Work', () => {
        aboutPage.visitHowDoesTheScienceWork();
    });

    it('A user can visit What are Affirmations?', () => {
        aboutPage.visitWhatAreAffirmations();
    });

    it('A user can visit How do I create effective Affirmations?', () => {
        aboutPage.visitCreateEffectiveAffirmations();
    });
});
