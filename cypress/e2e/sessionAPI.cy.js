describe('testing the session API', () => {
    beforeEach(() => {
        cy.session('s1', () => {
            cy.visit('/')
            cy.get('[data-cy=set-ls]').click().then(() => {
                expect(localStorage.getItem('key1')).to.be.eq('blue')
                expect(localStorage.getItem('key2')).to.eq("red")
            })
            cy.get('[data-cy=set-ss]').click().then(() => {
                expect(sessionStorage.getItem('key1')).to.be.eq('blue')
                expect(sessionStorage.getItem('key2')).to.eq("red")
            })

            cy.get('[data-cy=cookie-trigger]').click()
            .get('[data-cy=cookie-def-set]').click().then(() => {
                cy.getCookie('key1').should('be.a', 'object').should('have.property', 'value', 'value1')
                cy.getCookie('default').should('be.a', 'object').should('have.property', 'value', 'set')
            })        
        })
    })

    it('tests that the session is restored properly', () => {
            cy.visit('/')
            expect(localStorage.getItem('key1')).to.be.eq('blue')
            expect(localStorage.getItem('key2')).to.eq("red")
            expect(sessionStorage.getItem('key1')).to.be.eq('blue')
            expect(sessionStorage.getItem('key2')).to.eq("red")

            cy.getCookie('key1').should('be.a', 'object').should('have.property', 'value', 'value1')
            cy.getCookie('default').should('be.a', 'object').should('have.property', 'value', 'set')
    })

    it('shows that setup only runs once', () => {
        cy.visit('/')
        expect(localStorage.getItem('key1')).to.be.eq('blue')
        expect(sessionStorage.getItem('key2')).to.eq("red")

        cy.getCookie('key1').should('be.a', 'object').should('have.property', 'value', 'value1')
        cy.getCookie('default').should('be.a', 'object').should('have.property', 'value', 'set')
    })
})