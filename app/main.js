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

	methods: {

		addToList: function() {
			if (this.newTask == '') return false;
			this.tasks.push({
				name: this.newTask,
				colors: ["blue", "green", "yellow", "red"],
				colorsTracker: 0,
				backgroundColor: "blue",
			});
			this.newTask = "";
			document.getElementById("taskInput").focus();

		},

		removeItem: function(index) {
			this.tasks.splice(index, 1);
		},

		toggleColor: function(task) {
			if (task.colorsTracker == (task.colors.length - 1)) {
				task.colorsTracker = 0;
			} else {
				task.colorsTracker += 1;
			}
			task.backgroundColor = task.colors[task.colorsTracker];
		},

		clearAll: function() {
			this.tasks = [];
			document.getElementById("taskInput").focus();
		}


	}

})