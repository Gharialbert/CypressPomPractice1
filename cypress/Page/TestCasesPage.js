class TestCasesPage {
    elements = {
        pageHeader: () => cy.get("h2.title.text-center"),
    };

    verifyPageHeader() {
        this.elements.pageHeader().should("have.text", "Test Cases");
    }
}

export default TestCasesPage;
