/// <reference types="cypress" />
import 'cypress-iframe'
describe('Testing Saucedemo - Login/Logout', () => {
    beforeEach(() => {
      cy.visit('http://www.saucedemo.com/')
    })

    it('Login', () => {
        cy.get('#user-name').click()
        cy.wait(500)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.wait(500)
        cy.xpath("//span[@class='title'][contains(.,'Products')]").contains('Products')
      })

    it('Logout', () => {
        cy.get('#user-name').click()
        cy.wait(500)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.wait(500)
        cy.xpath("//button[@id='react-burger-menu-btn']").click()
        cy.xpath("//a[contains(@id,'logout_sidebar_link')]").click()
        cy.wait(200)
        cy.xpath("//span[@class='title'][contains(.,'Products')]").should('not exist')
    })

        })
    

      /* it('Login fail test', () => {
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

}) */