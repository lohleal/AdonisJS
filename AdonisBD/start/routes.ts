/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('cursos', '#controllers/cursos_controller')
router.resource('disciplinas', '#controllers/disciplinas_controller')
router.resource('alunos', '#controllers/alunos_controller')

// Matrículas
router.get('matriculas', '#controllers/matriculas_controller.index')
router.post('matriculas', '#controllers/matriculas_controller.store')
router.delete('matriculas/:alunoId/:disciplinaId',
  '#controllers/matriculas_controller.destroy')


