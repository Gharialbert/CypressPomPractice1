class CartPage {
    verifyProductInCart() {
        cy.get('#cart_info').should('be.visible');
    }

    enterEmailAndSubscribe(email) {
        cy.get('#susbscribe_email').type(email);
        cy.get('#subscribe').click();
    }

    verifySuccessMessage() {
        cy.get('.alert-success').should('have.text', 'You have been successfully subscribed!');
    }

    clickProceedToCheckout() {
        cy.get('a[href="/checkout"]').click();
    }

    verifyCartPageDisplayed() {
        cy.get('.cart-info').should('be.visible');
    }
}

export default CartPage;
