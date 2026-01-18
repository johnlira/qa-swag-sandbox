describe('Login Tests', () => {
  it("Fail. Should Return Error", () => {
    cy.visit('')
    cy.login("errorUser123", "secret_sauce");
    cy.contains('Epic sadface: Username and password do not match any user in this service')
  });
  it('Success. Should redirect Home page', () => {
    cy.visit('')
    cy.fixture('valid-user').then((user) => cy.login(user.username, user.password))
    cy.contains('Products')
  })  
})