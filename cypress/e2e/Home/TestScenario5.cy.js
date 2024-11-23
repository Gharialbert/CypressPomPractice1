import HomePage from "../../Page/HomePage";

describe('Scroll Up and Scroll Down Functionality', () => {
    const homePage = new HomePage();

    it('Verify Scroll Up without "Arrow" button and Scroll Down functionality', () => {
        homePage.opensite();
        homePage.verifyHomePageVisible();
        homePage.scrollToBottom();
        homePage.scrollToTop();
        homePage.verifyScrolledToTop();
    });
});
