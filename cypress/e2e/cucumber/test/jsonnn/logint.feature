












Feature: login page
    Scenario Outline: authentification utilisateur
        Given je me connecte sur 'https://automationexercise.com/login'
        Then je verifie que la page est visible
        When je saisie email 'marroukisalah2@gmail.com'
        And je saisie password 'Cypress12345'
        Then je clique sur le bouton 'Login'
        
        Examples:
        | email | password | nom |
        | marroukisalah8@gmail.com | Cypress12345 | salah |
        
     