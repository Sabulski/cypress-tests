import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import NutritionAndAllergensPage from "../../page-objects/nutrition-and-allergens/nutrition-and-allergens-page";
const nutritionAndAllergensPage = new NutritionAndAllergensPage();

Then("I should be on the Nutrition & Allergens page", () => {
  nutritionAndAllergensPage.verify();
});