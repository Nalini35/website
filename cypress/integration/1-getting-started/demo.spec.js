
describe('My First Test', function () 
{
    it('verify create google account', function ()
    {
      cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp')
      cy.title().should('eq','Create your Google Account')
      cy.get('body.EIlDfe:nth-child(2) div.H2SoFe.LZgQXe.RELBvb.TFhTPc:nth-child(1) div.RAYh1e.RELBvb.LZgQXe.qmmlRd div.xkfVF div.Aa1VU div.JhUD8d.SQNfcc.vLGJgb div.zWl5kd div.DRS7Fe.bxPAYd.k6Zj8d div.pwWryf.bxPAYd:nth-child(2) div.Wxwduf.Us7fWe.JhUD8d div.zQJV3 div.dG5hZc div.qhFLie div.FliLIb.DL0QTb div.VfPpkd-dgl2Hf-ppHlrf-sM5MNb button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b > span.VfPpkd-vQzf8d').click()
      cy.get('#firstName').type('nalini') 
      cy.get('body.EIlDfe:nth-child(2) div.H2SoFe.LZgQXe.RELBvb.TFhTPc:nth-child(1) div.RAYh1e.RELBvb.LZgQXe.qmmlRd div.xkfVF div.Aa1VU div.JhUD8d.SQNfcc.vLGJgb div.zWl5kd div.DRS7Fe.bxPAYd.k6Zj8d div.pwWryf.bxPAYd:nth-child(2) div.Wxwduf.Us7fWe.JhUD8d div.WEQkZc div.bCAAsb section.aTzEhb div.CxRgyd div:nth-child(1) div.SdBahf.DbQnIe.ia6RDd.Jj6Lae:nth-child(1) div.OyEIQ.uSvLId div:nth-child(2) > span:nth-child(1)')
      cy.get('#lastName').type('nitu')
      cy.get('.akwVEf').type('nalininitu661')
      cy.get('body.EIlDfe:nth-child(2) div.H2SoFe.LZgQXe.RELBvb.TFhTPc:nth-child(1) div.RAYh1e.RELBvb.LZgQXe.qmmlRd div.xkfVF div.Aa1VU div.JhUD8d.SQNfcc.vLGJgb div.zWl5kd div.DRS7Fe.bxPAYd.k6Zj8d div.pwWryf.bxPAYd:nth-child(2) div.Wxwduf.Us7fWe.JhUD8d div.WEQkZc div.bCAAsb section.aTzEhb div.CxRgyd div:nth-child(1) div.SdBahf.VxoKGd.OcVpRe.DbQnIe.ia6RDd.Jj6Lae:nth-child(3) div.OyEIQ.uSvLId div:nth-child(2) > span:nth-child(1)')
      cy.get('#passwd').type('nalini12345#')
      cy.get('#confirm-passwd').type('nalini12345#')
      cy.get('body.EIlDfe:nth-child(2) div.H2SoFe.LZgQXe.RELBvb.TFhTPc:nth-child(1) div.RAYh1e.RELBvb.LZgQXe.qmmlRd div.xkfVF div.Aa1VU div.JhUD8d.SQNfcc.vLGJgb div.zWl5kd div.DRS7Fe.bxPAYd.k6Zj8d div.pwWryf.bxPAYd:nth-child(2) div.Wxwduf.Us7fWe.JhUD8d div.zQJV3 div.dG5hZc div.qhFLie div.FliLIb.DL0QTb div.VfPpkd-dgl2Hf-ppHlrf-sM5MNb button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b > span.VfPpkd-vQzf8d').click()   
    })
})
