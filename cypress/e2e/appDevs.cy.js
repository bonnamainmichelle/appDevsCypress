import Skill from '../paginas/skill/index'
import Colaborador from '../paginas/colaborador/index.js'
import Equipe from '../paginas/equipe/index.js'


describe('paginas', () => {
  
  it.only('cadastrar Nova Skill', () => {
    Skill.cadastrar();
  })

  it.only('editar Skill', () => {
    Skill.editar();
  });

  it.only('excluir Skill', () => {
    Skill.deletar();  
  });

  it('cadastrar Novo Colaborador', () => {
    Colaborador.cadastrar();
  });

  it('editar Colaborador', () => {
    Colaborador.editar();
  });

  it('excluir Colaborador', () => {
    Colaborador.deletar(); 
  });

  it('cadastrar Nova Equipe', () => {
    Equipe.cadastrar();
  });

  it('editar Equipe', () => {
    Equipe.editar();
  });

  it('excluir Equipe', () => {
    Equipe.deletar(); 
  });

})
