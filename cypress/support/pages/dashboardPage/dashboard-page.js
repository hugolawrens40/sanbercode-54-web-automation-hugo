class dashboardPage {

    async dashboardMenu (){
        cy.xpath('//div/a[@href="/dashboard"]')
            .click()
    }

    async penjualanMenu (){
        cy.xpath('//div/a[@href="/sales"]')
            .click()
    }

    async pembelianMenu (){
        cy.xpath('//div/a[@href="/purchases"]')
            .click()
    }

    async kategoriMenu (){
        cy.xpath('//div/a[@href="/categories"]')
            .click()
    }

    async produkMenu (){
        cy.xpath('//div/a[@href="/products"]')
            .click()
    }

    async penggunaMenu (){
        cy.xpath('//div/a[@href="/users"]')
            .click()
    }

    async pelangganMenu (){
        cy.xpath('//div/a[@href="/customers"]')
            .click()
    }

}

module.exports = new dashboardPage();