const express = require("express");
const router = express.Router();
const todoControllers = require("../controllers/todoController");

router.get("/", todoControllers.getTodos);
router.get("/:id", todoControllers.getOneTodo)
router.post("/", todoControllers.createTodo);
router.delete("/:id", todoControllers.deleteTodo)
router.put("/:id", todoControllers.updateTask)

module.exports = router;
