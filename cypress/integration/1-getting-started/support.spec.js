describe('my test', function ()
{
    it ('verify Support Form', function()
    {
        cy.visit("https://practice.automationbro.com/support-form/")
        cy.url().should("include","automationbro")
        cy.title().should("eq", "Support Form – Practice E-Commerce Site")
        cy.get('#evf-680-field_lVizlNhYus-1').type("nalini")
        cy.get('#evf-680-field_XYnMdkQDKM-3').type("nalinishoz@gmail.com")
        cy.get("#evf-680-field_82kaAPhrnW-6").select("Sales Team")
        cy.get("#evf-680-field_sOAJfxP1Lf-7 input")
        .check("Integration Issue")
        cy.get('#evf-680-field_s1KysSbUW6-8-container').click()
        cy.get('[aria-label="January 30, 2022"]').click()
        
        

    })
})