    //Launch URL
    describe('my suite 1', function() 
    {
    it ('LaunchURL' , () => {
       cy.visit("https://www.qaoncloud.com/")      
})
})
// validation of title
describe('my suite 2', function()
{
    it('Validate title' ,() => {
       
        cy.contains('Get Your App Tested By A Remote, Flexible, On-Demand Team')
        
        
    })
})
//validation of button
describe('my suite 3', function()
{
    it('Validate of internal links' ,() => {
       
        cy.get('.mobile-contact-btn').click()
  
    })
})

//validation of form
describe('my suite 4', function()
{
    before(function(){
     
        cy.fixture('form').then(function(data){
         this.data=data
    
    })
    it('Validate of form' ,() => {
        cy.visit('https://www.qaoncloud.com/contact-us/')

        cy.wait(4000)

        cy.get('#FIRSTNAME').type(this.data.FIRSTNAME)
        cy.get('#LASTNAME').type('nitu')
        cy.get('#EMAIL').type('drse@gmail.com')
        cy.get('#COMPANYNAME').type('desicrew')
        cy.get('.sib-form-block__button').click()
  
    
})
})
})
