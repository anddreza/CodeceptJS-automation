const { faker } = require('@faker-js/faker');
Feature('tasks');

Scenario('deve poder cadastrar uma nova tarefa',  ({ I }) => {

	const taskName = 'Fazer compras'

	I.sendDeleteRequest('/helper/tasks/' + taskName)
	//I.seeResponseCodeIsSucessful()
	I.amOnPage('/')

	I.fillField('input[class*=NewTask]', taskName)
	//input[placeholder="Add a new Task"]
	I.click('Create')
	I.see(taskName, '.task-item')
	//.task-item


});


Scenario.only('Não deve cadastrar tarefas com nome duplicado', ({I})=> {
	
	//Dado que eu tenho uma nova tarefa
	const task = {
		name: 'Pagar a fatura do cartão',
		is_done: false
	} 

	I.sendDeleteRequest('/helper/tasks/' + task.name)
	I.seeResponseCodeIsSuccessful()

	//Mas essa tarefa já foi cadastrada anteriormente e eu não lembrava disso
	I.sendPostRequest('/tasks', task)
	I.seeResponseCodeIsSuccessful()

	//Quando tento cadastrar essa tarefa novamente
	I.amOnPage('/')
	I.fillField('input[class*=NewTask]', task.name)
	I.click('Create')
		//Então deve ver uma mensagem de duplicidade
	I.see('Task already exists!', '.swal2-html-container')

});