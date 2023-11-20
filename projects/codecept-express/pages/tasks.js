const { I } = inject();

module.exports = {

	createTask: function(taskName){
		I.amOnPage('/')
  
		I.fillField('input[class*=NewTask]', taskName)
		//input[placeholder="Add a new Task"]
		I.click('Create')
	  }
}
