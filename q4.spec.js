// cypress/integration/header.spec.js

describe('Header Test', () => {
    it('Verifies the presence and content of the header', () => {
      // Use cy.visit() to open the page containing the header
      cy.visit('/path/to/your/page'); // Replace with the actual URL of your page
  
      // Use cy.get() to select the header element by its class and data-test-id attribute
      cy.get('h1.header-inner[data-test-id="header-inner"]').should('be.visible');
  
      // Use cy.contains() to check if the header contains the text "Road to Hire"
      cy.contains('h1.header-inner[data-test-id="header-inner"]', 'Road to Hire');
    });
  });
  