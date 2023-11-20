Feature('tasks');

Scenario.only('deve poder cadastrar uma nova tarefa',  ({ I }) => {
	const taskName = 'Ler um livro de JS'
	I.amOnPage('/')

	I.fillField('input[placeholder$=Task]', taskName)
	//input[placeholder="Add a new Task"]
	I.click('Create')
	I.see(taskName, '.task-item')
	//.task-item


});
