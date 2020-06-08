describe('hgloves', () => {

    it('se rendre sur l\'onglet contact', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(6) > .MuiTypography-root').click()
        cy.get('[alt="Representation des différents contact sur lesquels nous sommes disponible"]').should('be.visible')
    })

    it('se rendre sur l\'onglet prolématique', () => {
        cy.visit('http://localhost:3000')
        cy.get('.AppBarTabContainer > :nth-child(2) > .MuiTypography-root').click()
        cy.get('.ProblematicImageContainer').should('be.visible')
    })

    it('se rendre sur l\'onglet solution', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(3) > .MuiTypography-root').click()
        cy.get('.SolutionComponentRightContainer').should('be.visible')
    })

    it('se rendre sur l\'onglet équipe', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(4) > .MuiTypography-root').click()
        cy.get('.sc-EHOje > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').should('be.visible')
    })

    it('se rendre sur l\'onglet acteurs', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(5) > .MuiTypography-root').click()
        cy.get(':nth-child(1) > .ActorsComponentCardContentContainer > .ActorsComponentCardContent').should('be.visible')
    })

    it('se rendre sur l\'onglet news', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(7) > .MuiTypography-root').click()
        cy.get('.BlogComponentImage').should('be.visible')
    })

    it('se rendre sur l\'onglet hgloves', () => {
        cy.visit('http://localhost:3000')
        cy.get('.AppBarTabContainer > :nth-child(1) > .MuiTypography-root').click()
        cy.get('.HGlovesImage').should('be.visible')
    })
})