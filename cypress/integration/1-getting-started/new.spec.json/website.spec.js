///<reference types = "cypress"  />
import cypress from "cypress";
import{ TIMEOUT } from "dns";
import{ exists } from "fs";
{
    "project name" ; "panther"
}
"experimentalSourceRewriting" .true;
Cypress.on('uncaught:exception',
(err, runnable) =>{
    //returning false here prevents Cypress from
    //failing the test
    //failing the tesr
    return false
});
const datajson =
require( '../../fixtures /')
describe('homepage validations',
() => {
    it('launchURL and check Fields',
() =>{
    //Launch URL
    cy.visit ('https://panther.com/')

})
})




