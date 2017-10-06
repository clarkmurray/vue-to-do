var toDo = new Vue ({

	el: "#taskList",

	data: {
		newTask: "" ,
		tasks: [], 
	},

	methods: {

		addToList: function() {
			this.tasks.push(this.newTask);

		}
	}



})