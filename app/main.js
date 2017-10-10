Vue.directive('focus', {
	inserted: function (el) {
		el.focus()
	}
});


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


  	beforeMount: function() {
  		this.loadTasks();
  	},



	methods: {

		addToList: function() {
			if (this.newTask == '') return false;
			this.tasks.push({
				name: this.newTask,
				colors: ["blue", "green", "yellow", "red"],
				colorsTracker: 0,
				backgroundColor: "blue",
				isChecked: false,
			});
			this.newTask = "";
			document.getElementById("taskInput").focus();

			this.saveTasks();

		},

		removeItem: function(index) {
			this.tasks.splice(index, 1); 
			this.saveTasks();
		},


		saveTasks: function() {
			localStorage.setItem("tasks", JSON.stringify(this.tasks));
		},


		loadTasks: function() {
			this.tasks = JSON.parse(localStorage.getItem('tasks'));
		},

		toggleColor: function(task) {
			if (task.colorsTracker == (task.colors.length - 1)) {
				task.colorsTracker = 0;
			} else {
				task.colorsTracker += 1;
			}
			task.backgroundColor = task.colors[task.colorsTracker];
			this.saveTasks();
		},

		clearAll: function() {
			console.log("Registered");
			this.tasks = [];

			document.getElementById("taskInput").focus();
			this.newTask = "";
			this.saveTasks();
		},

		changeBullet: function(task) {
			task.isChecked = !task.isChecked;
			this.saveTasks();
		}


	}

})