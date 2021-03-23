import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../page-objects/home-page/home-page";

const homePage = new HomePage();

Given("I visit the Chick-Fil-A homepage", () => {
  homePage.visit();
});
