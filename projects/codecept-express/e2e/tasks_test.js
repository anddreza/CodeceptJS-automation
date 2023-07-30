Feature('tasks');

Scenario.only('deve poder cadastrar uma nova tarefa',  ({ I }) => {
	
	I.amOnPage('/')
	I.fillField('input[placeholder="Add a new Task"]', 'Ler um livro de JS')
	I.click('Create')
	I.wait(5)


});
