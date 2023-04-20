
import 'cypress-iframe'
describe('Pruebas adicionales de DemoBlaze', () => {
    beforeEach(() => {
      cy.visit('https://demoblaze.com/index.html')
    })
   /*  
    /*it('Verificar la funcionalidad del carrito', () => {
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
    it('Verificar realizacion de la orden', () => {
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
  
    it('Iniciar sesión en la cuenta de usuario', () => {
      cy.get('#login2').click()
      cy.wait(500)
      cy.get('#loginusername').type('test')
      cy.get('#loginpassword').type('test')
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      cy.wait(3000)
      cy.get('#nameofuser').contains('Welcome test')
    })*/
/*
    it('Desloguear usuario', () => {
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
        /*while (logged = true)
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
      )

      it('Prueba de fallo en inicio de sesión', () => {
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
        /*while (logged = true)
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
     
      

      }) */
      it('Prueba de selección de categoria', () => {
        cy.intercept('https://api.demoblaze.com/bycat')
       .as('categories')
        cy.get('#itemc').click
        cy.wait('@categories').then(({ request, response }) => {
          console.log(request.body)
          console.log(response.body)
        })
        })
        })
