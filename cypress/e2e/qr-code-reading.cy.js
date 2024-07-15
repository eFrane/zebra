describe('template spec', () => {
  it('reads a totp qr code', () => {
    cy.visit('http://localhost:9090/')

    cy.get('[data-cy="button:qr-upload"]').selectFile('cypress/fixtures/qrSingle.png')
    cy.get('[data-cy="text:totp-url"]').should('contain', 'otpauth://totp/eFrane?secret=mysecret&issuer=zebra%20test%20code')
  })
})
