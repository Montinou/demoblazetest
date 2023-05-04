// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('login_orange', (user, password) => { 
        cy.xpath("//input[contains(@name,'username')]").click()
        cy.wait(200)
        cy.xpath("//input[contains(@name,'username')]")
        .click()
        .type(user)
        cy.xpath("//input[contains(@name,'password')]")
        .click()
        .type(password)
        cy.xpath("//button[@type='submit'][contains(.,'Login')]").click()
})

Cypress.Commands.add('logout_orange', () => { 
        cy.xpath("//p[@class='oxd-userdropdown-name']").click()
        cy.xpath("//a[@href='/web/index.php/auth/logout']").click()
})


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })