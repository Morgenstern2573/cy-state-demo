describe('testing local storage', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('tests that local storage is set', () => {
        cy.get('[data-cy=set-ls]').click().then(() => {
            expect(localStorage.getItem('key1')).to.eq("blue")
            expect(localStorage.getItem('key2')).to.eq("red")
        })
    })

    it('tests that ls is empty, then sets and saves it', () => {
        expect(localStorage.getItem('key1')).to.be.null
        expect(localStorage.getItem('key2')).to.be.null

        cy.get('[data-cy=set-ls]').click().then(() => {
            expect(localStorage.getItem('key1')).to.eq("blue")
            expect(localStorage.getItem('key2')).to.eq("red")
            cy.mSaveLocalStorage()
        })
    })    

    it('tests that ls saved successfully', () => {
        expect(localStorage.getItem('key1')).to.be.null
        expect(localStorage.getItem('key2')).to.be.null
        
        cy.mRestoreLocalStorage().then(() => {
            expect(localStorage.getItem('key1')).to.eq("blue")
            expect(localStorage.getItem('key2')).to.eq("red")
        })    
    })
})