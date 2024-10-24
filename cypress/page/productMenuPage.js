class ProductMenuPage {
    visit() {
        cy.visit('https://staging-3d60-christianmanifest.wpcomstaging.com/');
    }

    clickProductsDropdown() {
        cy.get('.dropdown__button').contains('Products').click();
    }

    selectProduct(productName) {
        cy.contains('p', productName).click();
    }

    verifyProductHeader(productName) {
        cy.get('h3').should('contain.text', productName);
    }
}

export default ProductMenuPage;
