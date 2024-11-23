class ProductsPage {
    getProductsList() {
        cy.get('.features_items .col-sm-4');
    }

    clickViewFirstProduct() {
        cy.get('body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > ul > li > a')
            .should('be.visible') .click();
    }

    verifyAllProductsPageVisible() {
        cy.url().should('include', '/products');
        cy.get('.title.text-center').should('have.text', 'All Products');
    }

    searchProduct(productName) {
        cy.get('#search_product').type(productName);
        cy.get('#submit_search').click();
    }

    verifySearchedProductsVisible() {
        cy.get('.title.text-center').should('have.text', 'Searched Products');
    }

    addAllProductsToCart() {
        cy.get("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a")
            .should("be.visible").click();
    }

    verifyAllRelatedProductsVisible(productName) {
        cy.get('.productinfo').each(($el) => {
        });
    }

    hoverOverProductAndAddToCart(productIndex) {
        cy.get('.product-image-wrapper').eq(productIndex).trigger('mouseover');
    }

    clickContinueShopping() {
        cy.get('.btn:contains("Continue Shopping")').click({force: true});
    }
}

export default ProductsPage;
