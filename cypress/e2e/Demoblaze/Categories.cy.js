import 'cypress-iframe'
describe('Testing Demoblaze - Changing categories', () => {
    beforeEach(() => {
      cy.visit('https://demoblaze.com/index.html')
    })

    it('Selecting phone test', () => {
        cy.intercept('POST','https://api.demoblaze.com/bycat')
       .as('categories')
        cy.xpath("//a[@href='#'][contains(.,'Phones')]").click()
        cy.wait('@categories').its('response.body.Items').each((item) =>{
          expect(item.cat).to.eq('phone')
        }
        )}
        )

        it('Selecting phone test', () => {
            cy.intercept('POST','https://api.demoblaze.com/bycat')
           .as('categories')
            var counter = 0
            cy.xpath( "//a[@href='#'][contains(.,'Laptops')]").click()
            cy.wait('@categories').its('response.body.Items').each((item) =>{
              expect(item.cat).to.eq('notebook')
            }
            )}
            )

        it('Selecting Laptops test', () => {
            cy.intercept('POST','https://api.demoblaze.com/bycat')
            .as('categories')
            var counter = 0
            cy.xpath("//a[@href='#'][contains(.,'Monitors')]").click()
             cy.wait('@categories').its('response.body.Items').each((item) =>{
                  expect(item.cat).to.eq('monitor')
            }
            )}
            )    


})