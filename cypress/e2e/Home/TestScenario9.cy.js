import HomePage from "../../Page/HomePage";
import ProductsPage from "../../Page/ProductsPage";
import ProductDetailPage from "../../Page/ ProductDetailPage";

describe('Verify All Products and Product Detail Page', () => {
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const productDetailPage = new ProductDetailPage();

    it('should verify all products and product detail page', () => {
        homePage.opensite();
        homePage.verifyHomePageVisible();
        homePage.clickProductsButton();
        productsPage.verifyAllProductsPageVisible();
        productsPage.getProductsList();
        productsPage.clickViewFirstProduct();
        productDetailPage.verifyProductDetailsVisible();
    });
});
