/* describe('My first Tets 31/07/2023', () =>{
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
}) */

/* describe('My first Tets 31/07/2023', () =>{
    it('Visits the Kitchen Sink', () => {
        cy.visit("https://github.com/Juxnjo")
    })
}) */

/* describe('My first Tets 31/07/2023', () =>{
    it('finds the content "type"', () => {
        cy.visit("https://github.com/Juxnjo")

        cy.contains('type')
    })
}) */

/* describe('My first Tets 31/07/2023', () =>{
    it('clicks the link "type"', () => {
        cy.visit("https://github.com/Juxnjo")

        cy.contains('type').click()
    })
}) */

describe('My first Tets 31/07/2023', () =>{
    it('clicking "type" navigates to a new url', () => {
        cy.visit("https://github.com/Juxnjo")

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')
    })
})