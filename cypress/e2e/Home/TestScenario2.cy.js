import HomePage from "../../Page/HomePage";

describe('Test Subscription Feature', () => {
    const email = 'test@example.com';

    it('should verify subscription in home page', () => {
       const homePage = new HomePage()
        homePage.opensite();
        homePage.verifyHomePageVisible();
        homePage.scrollToFooter();
        homePage.verifySubscriptionText();
        homePage.enterEmailAndSubscribe(email);
        homePage.verifySubscriptionSuccessMessage();
    });

    it('should verify subscription in cart page', () => {
        const homePage = new HomePage()
        homePage.opensite();
        homePage.verifyHomePageVisible();
        homePage.scrollToFooter();
        homePage.verifySubscriptionText();
        homePage.enterEmailAndSubscribe(email);
        homePage.verifySubscriptionSuccessMessage();
    });
});
