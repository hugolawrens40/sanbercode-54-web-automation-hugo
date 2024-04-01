class listPelangganPopup {

    async verifyListPelangganExist (){
        cy.xpath('//section[contains(@class, "chakra-modal__content css-dqn6fy")]')
            .should('exist')
    }

    async chooseListPelanggan (){
        cy.xpath('//td[contains(text(),"Pelanggan Umum")]')
            .click()
    }

}

module.exports = new listPelangganPopup();