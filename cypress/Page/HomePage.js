class HomePage {
    opensite() {
        cy.visit('http://automationexercise.com');
    }

    clickTestCasesButton() {
        cy.get('#header > div > div > div > div:nth-of-type(2) > div > ul > li:nth-of-type(5) > a')
            .click();
    }

    scrollToRecommendedItems() {
        cy.get('footer').scrollIntoView();
    }

    getRecommendedItemsSection() {
        cy.get('.recommended_items').should('be.visible');
    }

    addToCartRecommendedProduct() {
        cy.get('#recommended-item-carousel > div > div.item.active > div:nth-child(2) > div > div > div > a')
            .should('be.visible').click();
    }

    clickViewCartButton() {
        cy.get('a[href="/view_cart"] u').click();
    }

    verifyHomePageVisible() {
        cy.get('body').should('contain', 'Home');
    }

    clickSignupLogin() {
        cy.get('a[href="/login"]').click();
    }

    scrollToBottom() {
        cy.scrollTo('bottom');
    }

    verifySubscriptionVisible() {
        cy.get("footer").contains("SUBSCRIPTION", { matchCase: false }).should("be.visible");
    }

    scrollToTopUsingArrow() {
        cy.get("#scrollUp").click(); // Adjust if there's a unique selector for the arrow button
    }

    verifyPageScrolledUp() {
        cy.get("h2").contains("Full-Fledged practice website for Automation Engineers").should("be.visible");
    }

    scrollToTop() {
        cy.scrollTo('top');
    }

    verifyScrolledToTop() {
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    }

    clickProductsButton() {
        cy.get('a[href="/products"]').click();
    }

    scrollToFooter() {
        cy.scrollTo('bottom');
    }

    verifySubscriptionText() {
        cy.get('h2:contains("Subscription")').should('be.visible');
    }

    enterEmailAndSubscribe(email) {
        cy.get('#susbscribe_email').type(email);
        cy.get('#subscribe').click();
    }

    verifySubscriptionSuccessMessage() {
        cy.get('.alert-success').should('have.text', 'You have been successfully subscribed!');
    }

    clickCart() {
        cy.get('#header > div > div > div > div:nth-of-type(2) > div > ul > li:nth-of-type(3) > a')
            .should('be.visible') .click();
    }
}

export default HomePage;
