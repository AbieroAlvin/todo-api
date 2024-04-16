const Todo = require("../models/Todo");

module.exports = {
  getAllTodos(req, res) {
    const allTodos = Todo.getAllTodos();
    res.json(allTodos);
  },
  getTodoById(req, res) {
    const todoId = req.params.id;
    const todo = Todo.getTodoById(todoId);
    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
    } else {
      res.json(todo);
    }
  },
  createNewTodo(req, res) {
    const newTodo = req.body;
    Todo.createNewTodo(newTodo);
    res.status(201).json(newTodo);
  },
  updateTodoById(req, res) {
    const todoId = req.params.id;
    const updatedTodo = req.body;
    Todo.updateTodoById(todoId, updatedTodo);
    res.json(updatedTodo);
  },
  deleteTodoById(req, res) {
    const todoId = req.params.id;
    Todo.deleteTodoById(todoId);
    res.status(204).send();
  },
};
