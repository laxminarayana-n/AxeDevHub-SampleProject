import { Given, When, Then, and } from "cypress-cucumber-preprocessor/steps";

Given("Navigating to Home page", () => {
  cy.visit("https://www.unilever.com");
  cy.wait(2000);
});
