class successTransactionNotifPopup {

    async verifysuccessTransactionNotifExist (){
        cy.xpath('//div[contains(text(), "transaksi ditambahkan")]')
            .should('exist')
    }
    
    async verifyDetailTransactionPopupExist (){
        cy.xpath('//section[contains(@class, "chakra-modal__content css-hxtskf")]')
            .should('be.visible')
    }

    async detailTransactionPopupCloseBtn (){
        cy.xpath('//button[contains(text(),"tutup")]')
            .click()
    }


}

module.exports = new successTransactionNotifPopup();