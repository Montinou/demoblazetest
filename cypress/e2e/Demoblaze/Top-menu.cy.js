import 'cypress-iframe'
describe('Testing Demoblaze - Top Menu', () => {
    beforeEach(() => {
      cy.visit('https://demoblaze.com/index.html')
    })

    it('Testing Demoblaze - Verify Home Funtionality', () => {
        cy.window().then(w => w.beforeReload = true)
        cy.window().should('have.prop', 'beforeReload')
        cy.xpath('//*[@id="navbarExample"]/ul/li[1]/a').click()
        cy.window().should('not.have.prop', 'beforeReload')
      })

    
      it('Testing Demoblaze - Verify Contact Funtionality', () => {
        cy.window().then(w => w.beforeReload = true)
        cy.window().should('have.prop', 'beforeReload')
        cy.xpath('//*[@id="navbarExample"]/ul/li[2]/a').click()
        cy.wait(1000)
        cy.xpath('//*[@id="exampleModal"]/div/div/div[3]/button[2]').click()
        cy.wait(1000)
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal("Thanks for the message!!");
         }); 
        cy.wait(1000)
        cy.window().should('not.have.prop', 'beforeReload')
      })

      it('Testing Demoblaze - Verify About us Funtionality', () => {
        cy.xpath("//a[@class='nav-link'][contains(.,'About us')]").click()
        cy.wait(1000)
        cy.get('#videoModal').should('be.visible')
        cy.xpath("(//button[@type='button'][contains(.,'Close')])[5]").click()
        cy.wait(1000)
        cy.get('#videoModal').should('not.be.visible')
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal("Thanks for the message!!");
         }); 
      })

      it('Testing Demoblaze - Verify Cart Funtionality', () => {
        cy.xpath("//h2[contains(.,'Products')]").should('not.exist')
        cy.xpath("//a[@class='nav-link'][contains(.,'Cart')]").click()
        cy.wait(1000)
        cy.xpath("//h2[contains(.,'Products')]").should('exist')
      })

})