const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getTodoById);
router.post("/", todoController.createNewTodo);
router.put("/:id", todoController.updateTodoById);
router.delete("/:id", todoController.deleteTodoById);

module.exports = router;
