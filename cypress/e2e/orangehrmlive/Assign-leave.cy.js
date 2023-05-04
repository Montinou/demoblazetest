/// <reference types="cypress" />
import 'cypress-iframe'
import "cypress-xpath"
describe('Testing orangehrmlive - Login/Logout', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Search for name', () => {
      cy.login_orange('Admin','admin123')
      cy.wait(300)
      cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][contains(.,'Leave')]").click()
      cy.xpath("//input[contains(@placeholder,'Type for hints...')]")
      .click()
      .type('Charlie')
      cy.wait(2500)
      cy.get('.oxd-autocomplete-dropdown').click()
      cy.wait(200)
      cy.scrollTo('top')
      cy.xpath("//button[@type='submit'][contains(.,'Search')]")
      .scrollIntoView()
      .click({force: true})
    
    })
  it('approve leave',() =>{
    cy.login_orange('Admin','admin123')
    cy.wait(300)
    cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][contains(.,'Leave')]").click()
    cy.wait(2000)
    cy.xpath("(//button[@type='button'][contains(.,'Approve')])[1]").click({force: true})
    cy.wait(400)
    cy.xpath("/html/body/div/div[2]/div/div[1]/div[2]/p[2]").should('be.visible')



})
  it('from date bigget than end date',() =>{    
    cy.login_orange('Admin','admin123')
    cy.wait(300)
    cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][contains(.,'Leave')]").click()
    cy.wait(2000)

    cy.xpath("//input[contains(@class,'oxd-input oxd-input--focus oxd-input--error')]").type('1984-01-01').tab()
    cy.get('div').should('have text', 'To date should be after from date')

})
})