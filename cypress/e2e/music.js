/// <reference types="cypress"/>

import MusicPage from '../page/musicPage';  

describe('Testing Music', () => {
    const musicPage = new MusicPage();  

    beforeEach(() => {
        musicPage.visit();
    });

    it('A user can select Prosperity music from drop down menu', () => {
        musicPage.selectMusic('Prosperity');  
    });

    it('A user can select Buddha Mind music from drop down menu', () => {
        musicPage.selectMusic('Buddha Mind');  
    });

    it('A user can select Let it Go + Theta music from drop down menu', () => {
        musicPage.selectMusic('Let it Go + Theta'); 
    });

    it('A user can stop the playing of music', () => {
        musicPage.selectMusic('Let it Go + Theta');  
        musicPage.stopMusic();  
    });

    it('Should verify that music is off by default', () => {
        musicPage.verifyMusicOff(); 
    });
});
