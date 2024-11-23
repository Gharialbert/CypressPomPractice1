import HomePage from "../../Page/HomePage";
import ProductsPage from "../../Page/ProductsPage";

describe('Add Products in Cart', () => {
    it('should add products to cart and verify details', () => {
        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        homePage.opensite();
        homePage.verifyHomePageVisible();
        homePage.clickProductsButton();
        productsPage.verifyAllProductsPageVisible();
        productsPage.hoverOverProductAndAddToCart(0);
        productsPage.clickContinueShopping();
        productsPage.hoverOverProductAndAddToCart(1);
    });
});
