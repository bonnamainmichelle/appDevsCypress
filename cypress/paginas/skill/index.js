import { slowCypressDown } from 'cypress-slow-down'
const el = require ('./elementos').Elementos

class Skill {

    cadastrar(){
        cy.viewport(1920, 1080);
        slowCypressDown(1000)
        cy.visit(el.paginaSkill);
        cy.get(el.novaSkill).click()
        cy.get(el.verificar).should('contain', 'Skill');
        cy.get(el.nome).type('Javascript');
        cy.get(el.tipo).select('Linguagem de Programação');
        cy.get(el.descrição).type('JavaScript é uma linguagem de programação interpretada e estruturada');

        cy.get(el.gravar).click();
        cy.get(el.mensagem).should('be.visible');

    }

    editar(){
        cy.viewport(1920, 1080);
        slowCypressDown(1000)
        cy.visit(el.paginaSkill);
        cy.get(el.editar).first().click();
        cy.get(el.verificar).should('contain', 'Skill');
        cy.get(el.nome).clear().type('CSS');
        cy.get(el.tipo).select('Ferramentas de Software');
        cy.get(el.descrição).clear().type('Estilos de uma página');

        cy.get(el.gravar).click();
        cy.get(el.mensagem).should('be.visible');

    }

    deletar(){
        cy.viewport(1920, 1080);
        slowCypressDown(1000)
        cy.visit(el.paginaSkill);

        cy.get(el.deletar).first().click();
        cy.get(el.mensagem).should('be.visible');
    }
}

export default new Skill()