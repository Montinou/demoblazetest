/// <reference types="cypress" />
import 'cypress-iframe'
import "cypress-xpath"
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
        cy.get('#logout2')
        .should('be.visible')
        .click()
      })
      it('Login2', () => {
       cy.login('test','test')
       cy.get('#logout2')
        .should('be.visible')
      })

    it('Logout', () => {
        let logged = true
        cy.get('#login2').click()
        cy.wait(500)
        cy.get('#loginusername').type('test')
        cy.get('#loginpassword').type('test')
        cy.xpath("//button[@type='button'][contains(.,'Log in')]")
        .should('be.visible')
        .click()
        cy.wait(3000)
        cy.get('#logout2')
        .should('be.visible')
        .click()
        cy.wait(3000)
        cy.get('#nameofuser').should('not.be.visible')
        while (logged == true)
        {
            if (cy.get('#nameofuser').should('not.be.visible')){
                logged = false
                
                }
                else {
                    console.log('no funciona')
                    return
                }
            }}
)


        
    

      it('Login fail test', () => {
        var logged = true
        cy.get('#login2').click()
        cy.wait(500)
        cy.get('#loginusername').type('test')
        cy.get('#loginpassword').type('test2')
        cy.xpath("//button[@type='button'][contains(.,'Log in')]")
        .should('be.visible')
        .click()
        cy.wait(3000)
        cy.get('#nameofuser').should('not.be.visible')
        while (logged == true)
        {
            if (cy.get('#nameofuser').should('not.be.visible')){
            logged = false
            
            }
            else {
                console.log('no funciona')
                return
            }
        }
     
      

      })

})