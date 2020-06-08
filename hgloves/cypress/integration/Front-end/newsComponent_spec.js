describe('hgloves', () => {

    it('se rendre sur le site de news via l\'onglet news', () => {
        cy.visit('http://localhost:3000', {
            onBeforeLoad(win) {
                cy.stub(win, 'open')
            }})
        cy.get(':nth-child(7) > .MuiTypography-root').click()
        cy.get('.BlogComponentLeftContainer > .MuiButtonBase-root').should('be.visible')
        cy.get('.BlogComponentLeftContainer > .MuiButtonBase-root').click()
        cy.window().its('open').should('be.called')
    })
})

