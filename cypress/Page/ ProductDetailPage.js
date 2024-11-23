class ProductDetailPage {
    getProductName() {
        return cy.get('.product-information h2'); // Selector for the product name
    }

    getProductCategory() {
        return cy.get('.product-information p:first-of-type'); // Selector for the product category
    }

    getProductPrice() {
        return cy.get('.product-information span'); // Selector for the product price
    }

    getProductAvailability() {
        return cy.get('.product-information p:nth-of-type(2)'); // Selector for availability
    }

    getProductCondition() {
        return cy.get('.product-information p:nth-of-type(3)'); // Selector for condition
    }

    getProductBrand() {
        return cy.get('.product-information p:nth-of-type(4)'); // Selector for brand
    }

    verifyProductDetailsVisible() {
        this.getProductName().should('be.visible');
        this.getProductCategory().should('be.visible');
        this.getProductPrice().should('be.visible');
        this.getProductAvailability().should('contain.text', 'Availability');
        this.getProductCondition().should('contain.text', 'Condition');
        this.getProductBrand().should('contain.text', 'Brand');
    }
}

export default ProductDetailPage;
