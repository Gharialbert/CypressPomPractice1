import HomePage from "../../Page/HomePage";
import CartPage from "../../Page/CartPage";

describe('Verify Subscription in Cart Page', () => {
    it('should verify subscription functionality in the Cart page footer', () => {
        const homePage = new HomePage();
        const cartPage = new CartPage
        homePage.opensite();
        homePage.verifyHomePageVisible();
        homePage.clickCart();
        homePage.scrollToFooter();
        homePage.verifySubscriptionText();

        const email = 'testuser@example.com';
        cartPage.enterEmailAndSubscribe(email);
        cartPage.verifySuccessMessage();
    });
});
