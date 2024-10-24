class AboutPage {
    visit() {
        cy.visit('https://staging-3d60-christianmanifest.wpcomstaging.com/');
    }

    clickAboutUsMenu() {
        cy.get('.dropdown').contains('About Us').click();
    }

    selectOurStory() {
        this.clickAboutUsMenu();
        cy.contains('a', 'Our Story').click();
    }

    selectOurValues() {
        this.clickAboutUsMenu();
        cy.contains('a', 'Our Values').click();
    }

    visitHowDoesTheScienceWork() {
        this.selectOurValues();
        cy.get('.button').contains('How Does the Science Work?').invoke('removeAttr', 'target').click();
    }

    visitWhatAreAffirmations() {
        this.selectOurStory();
        cy.get('.button').contains('What are Affirmations?').invoke('removeAttr', 'target').click();
    }

    visitCreateEffectiveAffirmations() {
        this.selectOurStory();
        cy.get('.button').contains('How do I create effective Affirmations?').invoke('removeAttr', 'target').click();
    }
}

export default AboutPage;
