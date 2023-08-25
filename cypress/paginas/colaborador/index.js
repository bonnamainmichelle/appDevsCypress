import { slowCypressDown } from 'cypress-slow-down';
const el = require ('./elementos').Elementos

class Colaborador {
    cadastrar(){
        cy.viewport(1920, 1080);
        slowCypressDown(1000);
        cy.visit(el.paginaColaborador);
        cy.get(el.novoColaborador).click()
        cy.get(el.verificar).should('contain', 'Colaborador');
        cy.get(el.nome).type('Michelle Padilha da Silva Bonnamain');
        cy.get(el.dataNascimento).type('25121988');
        cy.get(el.rg).type('0000000001');
        cy.get(el.email).type('mi@gmail.com');
        cy.get(el.observacao).type('Lorem Ipsum is Simply dummy text of the');

        cy.get(el.ferramentasSoftware).click();
        cy.get(el.checkbox).check('13');
        cy.get(el.checkbox).check('14');

        cy.get(el.infraestrutura).click();
        cy.get(el.checkbox).check('15');
        cy.get(el.checkbox).check('18');
        cy.get(el.checkbox).check('17');

        cy.get(el.linguagemProgramacao).click();
        cy.get(el.checkbox).check('31');
        cy.get(el.checkbox).check('33');
        cy.get(el.checkbox).check('5');
        cy.get(el.checkbox).check('6');

        cy.get(el.gravar).click();
        cy.get(el.mensagem).should('be.visible');

    }

    editar(){
        cy.viewport(1920, 1080);
        slowCypressDown(1000);
        cy.visit(el.paginaColaborador);
        cy.get(el.editar).first().click();
        cy.get(el.verificar).should('contain', 'Colaborador');

        cy.get(el.nome).clear().type('Michelle Silva');
        cy.get(el.dataNascimento).clear().type('12011988');
        cy.get(el.rg).clear().type('2222222236');
        cy.get(el.email).clear().type('silva@outlook.com');
        cy.get(el.observacao).clear().type('Lorem Ipsum - Teste de Edição');

        cy.get(el.ferramentasSoftware).click();
        cy.get(el.checkbox).check('13');
        cy.get(el.checkbox).check('14');

        cy.get(el.frameworks).click();
        cy.get(el.checkbox).check('12');
        cy.get(el.checkbox).check('9');

        cy.get(el.infraestrutura).click();
        cy.get(el.checkbox).check('15').uncheck();
        cy.get(el.checkbox).check('18');
        cy.get(el.checkbox).check('17').uncheck;

        cy.get(el.linguagemProgramacao).click();
        cy.get(el.checkbox).check('31');
        cy.get(el.checkbox).check('33');
        cy.get(el.checkbox).check('5').uncheck();
        cy.get(el.checkbox).check('6').uncheck();

        cy.get(el.metodologia).click();
        cy.get(el.checkbox).check('11')

        cy.get(el.gravar).click();
        cy.get(el.mensagem).should('be.visible');

    }

    deletar(){
        cy.viewport(1920, 1080);
        slowCypressDown(1000);
        cy.visit(el.paginaColaborador);
        cy.get(el.deletar).first().click();
        cy.get(el.mensagem).should('be.visible')
    }
}

export default new Colaborador()