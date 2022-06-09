describe(' First Test', function () 
{
    it ('verify search', function()
    {
                cy.visit('https://www.snapdeal.com/?utm_term=437025299421_104151711009_%7Bbidstrategy%7D&gclid=Cj0KCQiAraSPBhDuARIsAM3Js4rBKEMvYYq8oz8NLH5oIFG4C02Qbf5Y0OYXjj7ctovaaFwGlQ5CyocaAjsPEALw_wcB&utm_campaign=brand_account_brandcat_cpt_1d_ftu&utm_source=earth_sembrand&utm_medium=snapdeal')
                cy.get('#inputValEnter').click(),
                cy.get('#inputValEnter').type('kurtas'),
                cy.get('.searchTextSpan').click()
                cy.contains('cotton')
                cy.get('#inputValEnter').clear()
                cy.get('#inputValEnter').click()
                cy.get('#inputValEnter').type('perfume')
                cy.get('#inputValEnter').click()
                cy.get('.searchTextSpan').click()
                cy.get('div.col-xs-24.reset-padding.marT22:nth-child(29) div.col-xs-19.reset-padding div.comp.comp-right-wrapper.ref-freeze-reference-point.clear div.search-result-header:nth-child(1) div.seach-msg-sec.clearfix div.sorting-sec.animBounce:nth-child(7) div.sort-drop.clearfix > div.sort-selected').click()
                cy.get('[data-sorttype="phtl"]').click()
                cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(1) > label').click()
        
        
    
    })
})
