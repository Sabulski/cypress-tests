import url from "../../../fixtures/json/url.json"

export default class HomePage {
  visit() {
    cy.visit(url.chickFilABaseUrl);
  }
}

