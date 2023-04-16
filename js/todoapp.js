window.todos = function() {
	return {
		filter: 'all',
		todos: [],
		editedTodo: null,
		get active(){
			return this.todos.filter(todo => todo = !todo.completed)
		},
		get completed(){
			return this.todos.filter(todo => todo = todo.completed)
		},
		newTodo: '',
		getTodos(){
			if(this.filter === 'all'){
				return this.todos
			}
			if(this.filter === 'active'){
				return this.active
			}
			if(this.filter === 'completed'){
				return this.completed
			}
		},
		addTodo(){
			this.todos.push({
				id: this.todos.length + 1,
				body:this.newTodo,
				completed:false
			})
			this.newTodo = ''
		},
		editTodo(todo){
			todo.cachedBody = todo.body
			this.editedTodo = todo
		},
		cancelEditTodo(todo){
			todo.body = todo.cachedBody
			this.editedTodo = null
			delete todo.cachedBody
		},
		finishEditTodo(todo){
			this.editedTodo = null
		},
		deleteTodo(todo){
			let position = this.todos.indexOf(todo)
			this.todos.splice(position, 1)
		},
		completeTodo(todo){
			todo.completed = !todo.completed
		}
	}
}