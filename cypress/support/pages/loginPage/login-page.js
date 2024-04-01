const locator = require('../../locators/login-page-locators')

class loginPage {

    async goHomepage (){
        cy.visit('https://www.kasirdemo.belajarqa.com/')
    }

    async fillEmail (){
        cy.xpath(locator.datatestid.useremail_input)
            .type('lawrens_store@gmail.com')
            .should('have.value','lawrens_store@gmail.com')
    }

    async fillPassword (){
        cy.xpath(locator.datatestid.userpassword_input)
            .type('lawrensberjaya')
            .should('have.value','lawrensberjaya')
    }

    async clickLoginBtn (){
        cy.xpath(locator.datatestid.login_button)
            .click()
    }

}

module.exports = new loginPage();