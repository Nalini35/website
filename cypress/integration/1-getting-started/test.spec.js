
describe('My First Test', function () 
{
    it(' verify search' , function()
    {
    
  cy.visit('https://www.flipkart.com/')
  cy.get('._3704LK').click()
  cy.get('._3704LK').type('lipstick under 100')
  cy.get('.L0Z3Pu').click()
  cy.get('.JWMl0H > ._2ssEMF > ._3V8rao > span').click()
  cy.get('._5THWM1 > :nth-child(6)').click()
  cy.get('.exehdJ').click()
  cy.get('[data-id="LSKGAGT9KB22GFGC"] > ._4ddWXP > .s1Q9rs').click()
  

  
})
})