var toDo = new Vue ({

	el: "#taskList",

	data: {
		newTask: "" ,
		tasks: [], 

	},

	filters: {
    	capitalize: function (value) {
     		if (!value) return ''
      		value = value.toString()
      		return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },

	methods: {

		addToList: function() {
			if (this.newTask == '') return false;
			this.tasks.push({
				name: this.newTask,
				turnGreen: false
			});
			this.newTask = "";

		},

		removeItem: function(index) {
			this.tasks.splice(index, 1);
		},

		toggleColor: function(task) {
			task.turnGreen = !task.turnGreen;
		}
	}



})