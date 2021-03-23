const footer = {
  nutritionAndAllergensFooterButton: 'a[title*="Nutrition and Allergens information"]',
};

export default class Footer {
  clickNutritionAndAllergensButton () {
    cy.get(footer.nutritionAndAllergensFooterButton).click();
  }
}