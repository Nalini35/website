
describe('Test ', function(){
    before(function(){
        //access fixture data
      cy.fixture('form.json').then(function(data){
         this.data=data
    })
    })
    //test case  

    it('Test case1 ', function()  
    {
       //launch URL
        cy.visit("https://www.qaoncloud.com/contact-us/")
        //data driven from fixture
        cy.get('#FIRSTNAME').type(this.data.firstname)
    
          //cy.get("#timeframe-2f51099f-484a-4574-aec6-fa59f65b2cb9").focus()
          cy.get('select').select('researching',{ force: true})

    
})

})
