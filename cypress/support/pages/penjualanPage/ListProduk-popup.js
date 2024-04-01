class listProdukPopup {

    async verifyListProdukPopupExist (){
        cy.xpath('//section[contains(@class, "chakra-modal__content css-kyn87t")]')
            .should('be.visible')
    }

    async searchProdukPopup (){
        cy.xpath('//input[@ placeholder="cari"]')
            .type('Keyboard')
    }

    async chooseListProdukPopup (){
        cy.xpath('//td[contains(text(),"Logitech Keyboard K120")]')
            .click()
    }

}

module.exports = new listProdukPopup();