    //Launch URL
    const dataJson = require('../../fixtures/form.json')


    describe('my suite 1', function() 
    {
        /*before(function(){
            //access fixture data
          cy.fixture('form.json').then(function(data){
             this.data=data
        })
        })*/
    it ('LaunchURL' , () => {
       cy.visit("https://panther.com/")      
})



//Validation of request a demo button

        it('Validate of internal links' ,() => {
           
          cy.get('.col-md-4 > .btn').click()
            
        }) 
    
    //test case  

    it('Test case1 ', function()  
    {
       //launch URL
        cy.visit("https://panther.com/product/request-a-demo/")
        //data driven from fixture
        
        cy.get('#firstname-2f51099f-484a-4574-aec6-fa59f65b2cb9').focus()
        cy.get('#firstname-2f51099f-484a-4574-aec6-fa59f65b2cb9').type(dataJson.firstname)
       
        cy.get('#lastname-2f51099f-484a-4574-aec6-fa59f65b2cb9').focus()
        cy.get('#lastname-2f51099f-484a-4574-aec6-fa59f65b2cb9').type(dataJson.lastname)
       
        cy.get('#email-2f51099f-484a-4574-aec6-fa59f65b2cb9').focus()
        cy.get('#email-2f51099f-484a-4574-aec6-fa59f65b2cb9').type(dataJson.Workemail)
        
        cy.get('#company-2f51099f-484a-4574-aec6-fa59f65b2cb9').focus()
        cy.get('#company-2f51099f-484a-4574-aec6-fa59f65b2cb9').type(dataJson.Company)
       
        cy.get('#jobtitle-2f51099f-484a-4574-aec6-fa59f65b2cb9').focus()
        cy.get('#jobtitle-2f51099f-484a-4574-aec6-fa59f65b2cb9').type(dataJson.JobTitle)
        
        cy.get('#phone-2f51099f-484a-4574-aec6-fa59f65b2cb9').focus()
        cy.get('#phone-2f51099f-484a-4574-aec6-fa59f65b2cb9').type(dataJson.Phonenumber)

        
        cy.get('.hs-button').click({force:true})
        
        
    })
     
    //validation of logo
    
    
    it('Validate of logo' ,() => {
        cy.get('.d-flex > .img-fluid').click()  
        

    })



})



    






        
