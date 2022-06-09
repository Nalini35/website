    //Launch URL
    describe('my suite 1', function() 
    {
    it ('LaunchURL' , () => {
       cy.visit("https://panther.com/")      
})
})

//Validation of request a demo button
    describe('my suite 3', function()
    {

        it('Validate of internal links' ,() => {
           
            cy.visit("https://panther.com/product/request-a-demo/")
            cy.get('#firstname-2f51099f-484a-4574-aec6-fa59f65b2cb9').type("nalini")

             })
            
            })




    


    






        
