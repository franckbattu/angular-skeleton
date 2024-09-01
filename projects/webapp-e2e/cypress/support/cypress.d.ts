/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    onMobile(): Chainable<void>;
    onDesktop(): Chainable<void>;
  }
}
