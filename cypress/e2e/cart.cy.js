describe("Cart's tests",()=>{
    it("Should product in cart", () => {
        cy.visit('')
        cy.fixture('valid-user').then((user) => cy.login(user.username, user.password))
        cy.contains('Products')

        const selectedProductsNames = []
        const selectedIndexes = [] 
        const totalProducts = 6 // Total products in the website
        const quantityToAdd = 4 // Products quantatity to add - Change for you own test

        const getUniqueRandomIndex = () => {
            let n
            do {
                n = Math.floor(Math.random() * totalProducts)
            } while (selectedIndexes.includes(n))
            selectedIndexes.push(n)
            return n
        }

        const addProducts = (remaining) => {
            if (remaining === 0) {
                cy.verifyCart(selectedProductsNames)
                return
            }
            
            const n = getUniqueRandomIndex()
            cy.addToCart(n).then((productData) => {
                selectedProductsNames.push(productData)
                addProducts(remaining - 1)
            })
        }
        
        addProducts(quantityToAdd)
      });
})