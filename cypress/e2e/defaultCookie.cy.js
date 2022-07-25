describe('default cookie testing', () => {
    beforeEach(() => {
        cy.visit("/")
    })
    
    it('sets the default cookie', () => {
        cy.get('[data-cy=cookie-def-set]').click()

        cy.getCookie('default').should('be.a', 'object').should('have.property', 'value', 'set')
    })

    it('checks that the default cookie is till set', () => {
        cy.getCookie('default').should('be.a', 'object').should('have.property', 'value', 'set')
    })

    it('modifies the default cookie', () => {
        cy.get('[data-cy=cookie-modify]').click()

        cy.getCookie('default').should('be.a', 'object').should('have.property', 'value', 'modify')  
    })

    it('tests that the default cookie was unaffected', () => {
        cy.getCookie('default').should('be.a', 'object').should('have.property', 'value', 'modify')  
    })

    after(() => {
        cy.clearCookie('default').should('be.null')
    })
})