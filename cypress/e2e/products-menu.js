/// <reference types="cypress"/>

import ProductMenuPage from '../page/productMenuPage'; 

describe('Testing product menu dropdown', () => {
    const productMenuPage = new ProductMenuPage();  

    beforeEach(() => {
        productMenuPage.visit();
    });

    it('A user can click on Product menu dropdown', () => {
        productMenuPage.clickProductsDropdown(); 
    });

    it('A user can select Our Products from dropdown menu', () => {
        productMenuPage.clickProductsDropdown(); 
        productMenuPage.selectProduct('Our Products');  
    });

    it('A user can select Envision Board from dropdown menu', () => {
        productMenuPage.clickProductsDropdown();  
        productMenuPage.selectProduct('The enVision Board Set');  
        productMenuPage.verifyProductHeader('The enVision Board Set');  
    });

    it('A user can select New Destiny movie from dropdown menu', () => {
        productMenuPage.clickProductsDropdown();
        productMenuPage.selectProduct('The New Destiny Movie');  
        productMenuPage.verifyProductHeader('The New Destiny Movie');
    });

    it('A user can select The Genesis Series from dropdown menu', () => {
        productMenuPage.clickProductsDropdown();
        productMenuPage.selectProduct('The Genesis Series');  
        productMenuPage.verifyProductHeader('The Genesis Series');  
    });

    it('A user can select The Mobile Mantras from dropdown menu', () => {
        productMenuPage.clickProductsDropdown();  
        productMenuPage.selectProduct('The Mobile Mantras');  
        productMenuPage.verifyProductHeader('The Mobile Mantras');  
    });
});
