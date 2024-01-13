//your JS code here. If required.
cy.get('img').should('be.visible');
cy.wait(2000); // Adjust the wait time based on your application's behavior
// Adjust the number '2' to match the expected number of elements
cy.get('your-selector').should('have.length', 2);
