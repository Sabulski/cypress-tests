export default class NutritionAndAllergensPage {
  verify() {
    cy.url().should("include", "nutrition-allergens");
  }
}