import 'cypress-iframe'

describe('probando request',() =>{
    it('Prueba de selección de categoria', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/bycat',
      body: {
        cat: 'phone'
      }.then((response) => {
        get(response.items).should('contain','cat')
      
    
    })//then
    })//request









    })//it

})//describe