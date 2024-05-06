









import {Given,When,Then} from "cypress-cucumber-preprocessor/steps" ; 

Given("je me connecte sur {string}", (url) => {
  cy.visit(url);
});
Then("je verifie que la page est visible", () => {
  cy.get(".login-form h2").should("have.text", "Login to your account");
});
When("je saisie email {string}", (email) => {
  cy.get('[data-qa="login-email"]').type(email);
});
And("je saisie password {string}", (password) => {
  cy.get('[data-qa="login-password"]').type(password);
});
Then("je clique sur le bouton {string}", (btn) => {
  cy.get('button[data-qa="login-button"]').contains(btn).click();
});

