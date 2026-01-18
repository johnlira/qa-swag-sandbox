/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login with username and password
     * @example cy.login('standard_user', 'secret_sauce')
     */
    login(username: string, password: string): Chainable<void>

    /**
     * Custom command to add product to cart by index
     * Returns product data (name, price)
     * @example cy.addToCart(1).then((product) => { ... })
     */
    addToCart(index: number): Chainable<{ name: string; price: string }>

    /**
     * Custom command to verify products in cart
     * @example cy.verifyCart([])
     */
    verifyCart(selectedProducts: any[]): Chainable<void>
  }
}
