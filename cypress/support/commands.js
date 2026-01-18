Cypress.Commands.add('fillInput', (label, arg)=>{
    return cy.get(`[data-test="${label}"]`).type(arg)
})

Cypress.Commands.add('login', (username, password)=>{
    cy.fillInput('username', username)
    cy.fillInput('password', password)
    cy.get('[data-test="login-button"]').click();
})

Cypress.Commands.add('addToCart',(n)=>{
    return cy.get('[data-test="inventory-item"]').eq(n).then(($item) => {
        const productName = Cypress.$($item).find('[data-test="inventory-item-name"]').text().trim()
        return cy.wrap($item).find('[data-test^="add-to-cart"]').click().then(() => {
            return productName
        })
   })
})

Cypress.Commands.add('verifyCart', (selectedProducts)=>{
    cy.get('[data-test="shopping-cart-link"]').click();
    selectedProducts.forEach((product) => cy.contains(product))
})