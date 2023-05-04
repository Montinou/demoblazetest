/// <reference types="cypress" />
import 'cypress-iframe'
import "cypress-xpath"
describe('Testing orangehrmlive - Login/Logout', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

/*     it('Login', () => {
        cy.xpath("//input[contains(@name,'username')]").click()
        cy.wait(200)
        cy.get("//input[contains(@name,'username')]").type('Admin')
        cy.xpath("//input[contains(@name,'username')]").type('admin123')
        cy.xpath("//button[contains(@type,'submit')]").click()
        cy.wait(200)
        cy.xpath("//span[@class='title'][contains(.,'Products')]").should('be.visible')
      }) */
    it('Login', () => {
      cy.login_orange('Admin','admin123')
      cy.wait(200)
      cy.xpath("/html/body/div[1]/div[1]/div[1]/header/div[1]/div[2]").should('be.visible')
    })



    it('Logout', () => {
      cy.login_orange('Admin','admin123')
      cy.wait(5000)
      cy.logout_orange()
      cy.wait(500)
      cy.xpath("//button[@type='submit'][contains(.,'Login')]").should('be.visible')

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