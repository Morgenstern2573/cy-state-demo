describe('testing session storage', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })
    })

    it('tests that session storage is set', () => {
        cy.get('[data-cy=set-ss]').click().then(() => {
            expect(sessionStorage.getItem('key1')).to.eq("blue")
        }).saveSessionStorage()
    })

    it('tests that ss is now empty', () => {
        expect(sessionStorage.getItem('key1')).to.be.null
        expect(sessionStorage.getItem('key2')).to.be.null
    })

    it('tests that workaround works', () => {
        cy.restoreSessionStorage().then(() => {
            expect(sessionStorage.getItem('key1')).to.be.eq('blue')
            expect(sessionStorage.getItem('key2')).to.eq("red")
        })        
    })

})