Feature('tasks');

Scenario('deve poder cadastrar uma nova tarefa',  ({ I, tasksPage }) => {

	const taskName = 'Fazer compras'

	I.deleteByHelper(taskName)

	I.createTask(taskName)
	I.see(taskName, '.task-item')
	//.task-item


});


Scenario('Não deve cadastrar tarefas com nome duplicado', ({I})=> {
	
	//Dado que eu tenho uma nova tarefa
	const task = {
		name: 'Pagar a fatura do cartão',
		is_done: false
	} 

	I.deleteByHelper(task.name)

	//Mas essa tarefa já foi cadastrada anteriormente e eu não lembrava disso
	I.postTask(task)

	//Quando tento cadastrar essa tarefa novamente
	I.createTask(task.name)

	//Então deve ver uma mensagem de duplicidade
	I.see('Task already exists!', '.swal2-html-container')

});