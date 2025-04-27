describe('Simple UI Test', () => {
    it('Visits the app and clicks the button', () => {
        cy.visit('http://app:3000');
        cy.contains('Hello Cypress!');
        cy.get('#click-me').click();
    });
});
