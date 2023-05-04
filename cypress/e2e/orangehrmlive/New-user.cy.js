/// <reference types="cypress" />
import 'cypress-iframe'
import "cypress-xpath"
describe('Testing orangehrmlive - admin user', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
      })
  
      it('Search user by Role (Admin)', () => {
        
        cy.login_orange('Admin','admin123')
        cy.wait(300)
        cy.xpath("//a[@href='/web/index.php/admin/viewAdminModule']").click()
        cy.wait(1000)
        cy.xpath("(//div[@class='oxd-select-text-input'])[1]").click({force: true})
        cy.intercept('get','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/**').as('getusers')
        //cy.get('.oxd-select-dropdown').should('contain','Admin').click({force: true})
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div[2]').click({force: true})
        cy.xpath("//button[@type='submit'][contains(.,'Search')]").click({force: true})
        cy.wait('@getusers').its('response.body.data').each((item) => {
            expect(item.userRole.name).to.eq('Admin')
        })

      })

      it('Search user by Role (ESS)', () => {
        cy.login_orange('Admin','admin123')
        cy.wait(300)
        cy.xpath("//a[@href='/web/index.php/admin/viewAdminModule']").click()
        cy.wait(1000)
        cy.intercept('get','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/**').as('getusers')
        cy.xpath("(//div[@class='oxd-select-text-input'])[1]").click({force: true})
        //cy.get('.oxd-select-dropdown').should('contain','Admin').click({force: true})
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div[3]').click({force: true})
        cy.xpath("//button[@type='submit'][contains(.,'Search')]").click({force: true})
        cy.wait('@getusers').its('response.body.data').each((item) => {
            expect(item.userRole.name).to.eq('ESS')
        })
    })




})