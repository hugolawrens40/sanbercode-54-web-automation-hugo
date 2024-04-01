class penjualanBaruPage {

    async tanggalPenjualan (){
        cy.xpath('//div[contains (@id, "popover-trigger-172")] and /input[contains (@attribute, "value")]')
            .should('exist')
    }

    async namaPelanggan (){
        cy.xpath('//*[@ id="pelanggan"]')
            .click()
    }

    async verifyNamaPelanggan (){
        cy.xpath('//input[@ id="pelanggan"]')
            .should('have.value', 'Pelanggan Umum')
    }

    async invoiceNumberExist (){
        cy.xpath('//input[@ id="no. invoice"]')
            .should('exist')
    }

    async produkBtn (){
        cy.xpath('//button[contains(text(),"produk")]')
            .click()
    }

    async verifyNewProductSoldExist (){
        cy.xpath('//tbody/tr[contains(@role, "row")]')
            .should('exist')
    }

    async verifyNewProductSoldRightValue (){
        cy.xpath('//td[contains(text(), "Logitech Keyboard K120")]')
            .should('be.visible')
    }

    async addNumberOfProductSold (){
        cy.xpath('//input[@ type="number"]')
            .type('{selectall}2')
    }

    async addDiskon (){
        cy.xpath('//input[@ id="diskon"]')
            .type('5000')
    }
    
    async addNotes (){
        cy.xpath('//textarea[@ placeholder="catatan"]')
            .type('all good')
    }

    async addPaymentAmount (){
        cy.xpath('//input[@ placeholder="...jumlah bayar"]')
            .type('200000')
    }

    async PaymentBtn (){
        cy.xpath('//button[contains(text(),"Bayar")]')
            .click({timeout: 10000})
    }

    async verifyPageSalesEmpty (){
        cy.xpath('//tbody/tr[contains(@role, "row")]')
            .should('not.exist')
    }

}

module.exports = new penjualanBaruPage();