/// <reference types="cypress" />
import 'cypress-iframe'
describe('Testing Demoblaze - Login/Logout', () => {
    beforeEach(() => {
      cy.visit('https://demoblaze.com/index.html')
    })

    it('Login', () => {
        cy.get('#login2').click()
        cy.wait(500)
        cy.get('#loginusername').type('test')
        cy.get('#loginpassword').type('test')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(3000)
        cy.get('#nameofuser').contains('Welcome test')
      })

      it('Logout', () => {
        var logged = true
        cy.get('#login2').click()
        cy.wait(500)
        cy.get('#loginusername').type('test')
        cy.get('#loginpassword').type('test')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .should('be.visible')
        .click()
        cy.wait(3000)
        cy.get('#logout2')
        .should('be.visible')
        .click()
        cy.wait(3000)
        cy.get('#nameofuser').should('not.be.visible')
        while (logged = true)
        {
            if (cy.get('#nameofuser').should('not.exist')){
            logged = false
            cy.log('aca 1')
            }
            else {
                if (cy.get('#nameofuser').should('not.be.visible')){
                    logged = false
                    console.log('aca 2')
                }
                else {
                    console.log('no funciona')
                    logged = false
                    return
                }
            }


        }
    })

      it('Login fail test', () => {
        var logged = true
        cy.get('#login2').click()
        cy.wait(500)
        cy.get('#loginusername').type('test')
        cy.get('#loginpassword').type('test2')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .should('be.visible')
        .click()
        cy.wait(3000)
        cy.get('#nameofuser').should('not.be.visible')
        while (logged = true)
        {
            if (cy.get('#nameofuser').should('not.exist')){
            logged = false
            console.log('aca 3')
            }
            else {
                if (cy.get('#nameofuser').should('not.be.visible')){
                    logged = false
                    console.log('aca 4')
                }
                else {
                    console.log('no funciona')
                    return
                }
            }
        }
     
      

      })

})