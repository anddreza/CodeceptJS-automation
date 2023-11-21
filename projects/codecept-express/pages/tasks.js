const { I } = inject();

module.exports = {

	create: function(taskName){
		I.amOnPage('/')
  
		I.fillField('input[class*=NewTask]', taskName)
		//input[placeholder="Add a new Task"]
		I.click('Create')
	  },

	haveTask: function(taskName){
		I.see(taskName, '.task-item')
	},

	popUpHaveText: function(text){
		I.see(text, '.swal2-html-container')
	}
}
