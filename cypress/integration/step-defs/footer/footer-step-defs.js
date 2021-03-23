import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import Footer from '../../page-objects/footer/footer';

const footer = new Footer();

When("I click on the Nutrition & Allergens button in the footer", () => {
  footer.clickNutritionAndAllergensButton();
});