











Given('je me connecte sur google', () =>{
    cy.visit("https://google.com")
});
When('je visualise "Google" dans le titre', () =>{
 cy.title().should('eq','Google')
});
Then('je verifie la barre de recherche', () =>{
 cy.get("#APjFqb").should('be.visible')
});