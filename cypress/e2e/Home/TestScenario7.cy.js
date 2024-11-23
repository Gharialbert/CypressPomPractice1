import HomePage from "../../Page/HomePage";
import TestCasesPage from "../../Page/TestCasesPage";

const homePage = new HomePage();
const testCasesPage = new TestCasesPage();

describe('Verify Test Cases Page', () => {
    it('should navigate to the test cases page successfully', () => {
        homePage.opensite();
        homePage.verifyHomePageVisible();
        homePage.clickTestCasesButton();
        testCasesPage.verifyPageHeader();
    });
});
