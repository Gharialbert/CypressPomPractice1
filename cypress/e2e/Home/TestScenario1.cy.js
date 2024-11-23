import HomePage from "../../Page/HomePage";
import ProductsPage from "../../Page/ProductsPage";

describe('Search Product', () => {
    it('should search for a product successfully', () => {
        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        homePage.opensite();
        homePage.verifyHomePageVisible();
        homePage.clickProductsButton();
        productsPage.verifyAllProductsPageVisible();

        const productName = 'dress';
        productsPage.searchProduct(productName);
        productsPage.verifySearchedProductsVisible();
        productsPage.verifyAllRelatedProductsVisible(productName);
    });
});
