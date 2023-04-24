/// <reference types="cypress" />
import 'cypress-iframe'
describe('Testing Demoblaze - Shopping Cart', () => {
    beforeEach(() => {
      cy.visit('https://demoblaze.com/index.html')
    })

    it('Adding product to cart', () => {
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.get('.success > :nth-child(2)').should('contain', 'Samsung galaxy s6')
        cy.get('.success > :nth-child(3)').should('contain', '360')
        cy.get('.col-lg-1 > .btn').click()
        cy.get('.table > tbody > :nth-child(1) > :nth-child(2)').should('contain', 'Samsung galaxy s6')
        cy.get('.table > tbody > :nth-child(1) > :nth-child(3)').should('contain', '360')
        cy.get('#totalp').should('contain', '360')
      })

      it('Adding and finish the order', () => {
          cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
          cy.get('.col-sm-12 > .btn').click()
          cy.get('#cartur').click()
          cy.wait(1000)
          cy.get('.success > :nth-child(2)').should('contain', 'Samsung galaxy s6')
          cy.get('.success > :nth-child(3)').should('contain', '360')
          cy.get('.col-lg-1 > .btn').click()
          cy.get('#name').type("Agustin Montoya");
          cy.get('#country').type("Argentina")
          cy.get('#city').type("Cordoba")
          cy.get('#card').type("1029571209842098")
          cy.get('#month').type("May")
          cy.get('#year').type("2023")
          cy.get('.btn-primary').contains('Purchase').click()
          cy.get('.sweet-alert').contains('Thank you for your purchase!')
        })
})