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
			this.tasks.push(this.newTask);
			console.log(this.newTask);
			console.log(this.tasks);
			this.newTask = "";

		},

		removeItem: function(index) {
			console.log("Entered");
			this.tasks.splice(index, 1);
		}
	}



})