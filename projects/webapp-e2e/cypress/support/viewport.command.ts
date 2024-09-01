Cypress.Commands.add('onMobile', () => {
  cy.viewport(575, 640);
});

Cypress.Commands.add('onDesktop', () => {
  cy.viewport(1920, 1080);
});
