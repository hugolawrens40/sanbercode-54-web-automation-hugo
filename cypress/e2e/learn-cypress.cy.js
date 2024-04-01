const loginPage = require('../support/pages/loginPage/login-page')
const dashboardPage = require('../support/pages/dashboardPage/dashboard-page')
const penjualanPage = require('../support/pages/penjualanPage/penjualan-page')
const penjualanBaruPage = require('../support/pages/penjualanPage/penjualanBaru-page')
const listPelangganPopup = require('../support/pages/penjualanPage/ListPelanggan-popup')
const ListProdukPopup = require('../support/pages/penjualanPage/ListProduk-popup')
const successTransactionNotifPopup = require('../support/pages/penjualanPage/successTransactionNotif-popup')


describe('Cashier should be able to add sales', () => {
  it('with valid data', () => {
    // 1. Visit website
    // 2. Login with valid data
    // 3. Click menu Penjualan
    // 4. Click button "Tambah"
    // 5. Make sure the date refers to today's date
    // 6. Choose a customer by clicking the "Pelanggan" column
    // 7. Validate customer list pop up is visible
    // 8. Choose a customer by clicking the name of customer
    // 9. Validate the customer name matches the one selected 
    // 10. Validate that the invoice number is filled in automate
    // 11. Click button "Produk"
    // 12. Validate the product list popup is visible
    // 13. Input the name of the product in the search column
    // 14. Click a product that needs to add
    // 15. Validate the product is successfully added to the sales table
    // 16. Input the number of product items in the "Jumlah" column
    // 17. Input a number to the discount column
    // 18. Input a word or sentence to the notes column
    // 19. Input the amount of money the customer paid
    // 20. Click "Bayar" button
    // 22. Validate success notification exist
    // 22. Validate the popup notification that shows the right total sales, payments and return is visible
    // 23. Click close button
    // 24. Validate we back to new sales table

    // login to access cashier account
    loginPage.goHomepage() //1
    loginPage.fillEmail() //2
    loginPage.fillPassword()
    loginPage.clickLoginBtn()

    // add sales by sales page
    dashboardPage.penjualanMenu() //3 
    penjualanPage.tambahBtn() //4
    penjualanBaruPage.tanggalPenjualan() //5
    penjualanBaruPage.namaPelanggan() //6
    listPelangganPopup.verifyListPelangganExist() //7
    listPelangganPopup.chooseListPelanggan() //8
    penjualanBaruPage.verifyNamaPelanggan() //9
    penjualanBaruPage.invoiceNumberExist() //10

    //add product from product list button on sales page
    penjualanBaruPage.produkBtn() //11
    ListProdukPopup.verifyListProdukPopupExist() //12
    ListProdukPopup.searchProdukPopup() //13
    ListProdukPopup.chooseListProdukPopup() //14

    // complete the sales transaction
    penjualanBaruPage.verifyNewProductSoldExist() //15
    penjualanBaruPage.verifyNewProductSoldRightValue() //15
    penjualanBaruPage.addNumberOfProductSold() //16
    penjualanBaruPage.addDiskon() //17
    penjualanBaruPage.addNotes() //18
    penjualanBaruPage.addPaymentAmount() //19
    penjualanBaruPage.PaymentBtn() //20
    successTransactionNotifPopup.verifysuccessTransactionNotifExist() //21
    successTransactionNotifPopup.verifyDetailTransactionPopupExist() //22
    successTransactionNotifPopup.detailTransactionPopupCloseBtn() //23


    //new sales page with empty product
    penjualanBaruPage.verifyPageSalesEmpty() //24


  })
})