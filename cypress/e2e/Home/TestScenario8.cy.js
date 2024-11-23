import HomePage from "../../Page/HomePage";

describe("Verify Scroll Up and Scroll Down functionality", () => {
    const homePage = new HomePage();

    it("Scroll Down and Scroll Up Test", () => {
        homePage.opensite();
        homePage.verifyHomePageVisible();
        homePage.scrollToBottom();
        homePage.verifySubscriptionVisible();
        homePage.scrollToTopUsingArrow();
        homePage.verifyPageScrolledUp();
    });
});
