class penjualanPage {

    async tambahBtn (){
        cy.xpath('//a[contains(text(),"tambah")]')
            .click()
    }

}

module.exports = new penjualanPage();