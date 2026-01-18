Cypress.Commands.add('fillInput', (label, arg)=>{
    return cy.get(`[data-test="${label}"]`).type(arg)
})

Cypress.Commands.add('login', (username, password)=>{
    cy.fillInput('username', username)
    cy.fillInput('password', password)
    cy.get('[data-test="login-button"]').click();
})