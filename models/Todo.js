const todos = [];

module.exports = {
  getAllTodos() {
    return todos;
  },
  getTodoById() {
    return todos.find((todo) => todo.id === id);
  },
  createNewTodo(todo) {
    todos.push(todo);
  },
  updateTodoById(id, updatedTodo) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos[index] = updatedTodo;
    }
  },
  deleteTodoById(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  },
};
