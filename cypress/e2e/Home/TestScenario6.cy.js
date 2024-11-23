import HomePage from "../../Page/HomePage";
import CartPage from "../../Page/CartPage";

describe('Add to Cart from Recommended Items', () => {
    it('Should add a recommended product to the cart and verify it', () => {
        const homePage = new HomePage();
        const cartPage = new CartPage();

        homePage.opensite();
        homePage.scrollToRecommendedItems();
        homePage.getRecommendedItemsSection();
        homePage.addToCartRecommendedProduct();
        homePage.clickViewCartButton();
        cartPage.verifyProductInCart();
    });
});
