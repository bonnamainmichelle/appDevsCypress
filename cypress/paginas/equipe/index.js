import { slowCypressDown } from 'cypress-slow-down'
import 'cypress-file-upload';

const el = require ('./elementos').Elementos

class Equipe {

    cadastrar(){
        cy.viewport(1920, 1080);
        slowCypressDown(1000);
        cy.visit(el.paginaEquipe);
        cy.get(el.novaEquipe).click()
        
        cy.get(el.verificar).should('contain', 'Nova Equipe')
        cy.get(el.nome).type('Equipe Discovery')
        cy.get(el.escolherArquivo).click()
        cy.get(el.escolherArquivo).attachFile('discovery.jpg');
        cy.get(el.observacao).type('Nova Equipe de programação chamada Discovery')

        cy.get(el.ferramentasSoftware).click()
        cy.get(el.checkbox).check('13')
        cy.get(el.checkbox).check('14')
        
        
        cy.get(el.linguagemProgramacao).click()
        cy.get(el.checkbox).check('33')
        cy.get(el.checkbox).check('35')
        cy.get(el.checkbox).check('6')

        cy.get(el.gravar).click()
        cy.get(el.mensagem).should('be.visible')
    }

    editar(){
        cy.viewport(1920, 1080);
        slowCypressDown(1000);
        cy.visit(el.novaEquipe);
        cy.get(el.editar).first().click();
    
        cy.get(el.mensagem).should('contain', 'Editar Equipe')

        cy.get(el.nome).type('Equipe Discovery').clear().type('Equipe Star')
        cy.get(el.escolherArquivo).click()
        cy.get(el.escolherArquivo).attachFile('img.jpg');
        cy.get(el.observacao).type('Nova Equipe de programação chamada Discovery').clear().type('Nova Equipe Star')

        cy.get(el.ferramentasSoftware).click()
        cy.get(el.checkbox).check('13').uncheck()
        cy.get(el.checkbox).check('14')
        
        
        cy.get(el.linguagemProgramacao).click()
        cy.get(el.checkbox).check('33').uncheck()
        cy.get(el.checkbox).check('35')
        cy.get(el.checkbox).check('3').uncheck()
        cy.get(el.checkbox).check('6').uncheck()

        cy.contains(el.gravar).click()
        cy.get(el.mensagem).should('be.visible')

    }

    deletar(){
        cy.viewport(1920, 1080);
        slowCypressDown(1000);
        cy.visit(el.paginaSkill);

        cy.get(el.deletar).first().click();
        cy.get(el.mensagem).should('be.visible')
    }
}

export default new Equipe()