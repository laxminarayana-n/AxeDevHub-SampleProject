import { Given, When, Then, and } from "cypress-cucumber-preprocessor/steps";

Given("Navigating to Home page", () => {
  cy.visit("https://www.dove.com/uk/home.html");
  cy.wait(2000);
});
