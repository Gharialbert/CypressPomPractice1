import HomePage from "../../Page/HomePage";
import ProductsPage from "../../Page/ProductsPage";
import CartPage from "../../Page/CartPage";
import LoginPage from "../../Page/loginPage";
import {testData} from "../../Page/data";

const homePage = new HomePage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const loginPage = new LoginPage();

describe('Search Products and Verify Cart After Login', () => {
    it('should search products, add to cart, and verify after login', () => {
        homePage.opensite();
        homePage.clickProductsButton();
        productsPage.verifyAllProductsPageVisible();
        productsPage.searchProduct(testData.productName);
        productsPage.verifySearchedProductsVisible();
        productsPage.addAllProductsToCart();
        homePage.clickCart();
        cartPage.verifyProductInCart();
        homePage.clickSignupLogin();
        loginPage.login(testData.email, testData.password);
        homePage.clickCart();
        cartPage.verifyProductInCart();
    });
});
