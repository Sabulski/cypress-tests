import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const chickFilAHomepageUrl = "https://www.chick-fil-a.com/";
const nutritionAndAllergensFooterButton = 'a[title*="Nutrition and Allergens information"]'

Given('I visit the Chick-Fil-A homepage', () => {
  cy.visit(chickFilAHomepageUrl);
});

When("I click on the Nutrition & Allergens button in the footer", () => {
  cy.get(nutritionAndAllergensFooterButton).click();
});

Then("I should be on the Nutrition & Allergens page", () => {
  cy.url().should("include", "nutrition-allergens");
});

Then("I should see {string}", (text) => {
  cy.contains(text);
});
