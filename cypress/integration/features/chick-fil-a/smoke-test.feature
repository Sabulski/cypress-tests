Feature: Chick-Fil-A Smoke Test

  Scenario: Footer
    Given I visit the Chick-Fil-A homepage
    When I click on the Nutrition & Allergens button in the footer
    Then I should be on the Nutrition & Allergens page
    And I should see "Nutrition & Allergens"