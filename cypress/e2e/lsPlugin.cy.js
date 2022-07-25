describe('testing local storage', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('tests that local storage is set', () => {
        cy.get('[data-cy=set-ls]').click().then(() => {
            expect(localStorage.getItem('key1')).to.eq("blue")
            expect(localStorage.getItem('key2')).to.eq("red")
        }).saveLocalStorage('snap1')
    })

    it('tests that ls is now empty', () => {
        expect(localStorage.getItem('key1')).to.be.null
        expect(localStorage.getItem('key2')).to.be.null
    })

    it('tests that plugin works', () => {
        cy.restoreLocalStorage('snap1').then(() => {
            expect(localStorage.getItem('key1')).to.be.eq('blue')
            expect(localStorage.getItem('key2')).to.eq('red')
        })        
    })
})