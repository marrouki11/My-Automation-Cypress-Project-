











/// <reference types="cypress" />

describe("premier test API", () => {
  it("GET API", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });

  it("POST API", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        brand: "Polo2222",
        category: "Women",
        name: "Blue Top",
        price: "Rs. 500",
      },
    })
      .its("status")
      .should("equal", 200);
  });
  it.only("PUT API", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        title: "TEST PUT 001",
        body: "description PUT 001",
      },
    })
      .its("status")
      .should("equal", 200);
  });
  it("DELETE API", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/100",
    })
      .its("status")
      .should("equal", 200);
  });
});
