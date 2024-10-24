class MusicPage {
    visit() {
        cy.visit('https://staging-3d60-christianmanifest.wpcomstaging.com/');
    }

    selectMusic(musicName) {
        cy.get('[aria-label="choose music to play"]').click();
        cy.contains('.dropdown__list-item', musicName).click();
    }

    stopMusic() {
        cy.get('.dropdown__sound-toggler').eq(0).click();
    }

    verifyMusicOff() {
        cy.get('.dropdown__sound-toggler')
          .should('have.class', 'dropdown__sound-toggler--off');
    }
}

export default MusicPage;
