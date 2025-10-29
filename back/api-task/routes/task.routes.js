// routes/taskRoutes.js
const express = require("express");
const TaskController = require("../controller/task.controller");

const router = express.Router();

// Crear una nueva tarea
router.post('/', TaskController.createTask);

// Obtener todas las tareas
router.get('/', TaskController.getAllTasks);

// Obtener una tarea por ID
router.get('/:id', TaskController.getTaskById);

// Actualizar una tarea por ID
router.put('/:id', TaskController.updateTask);

// Eliminar una tarea por ID
router.delete('/:id', TaskController.deleteTask);

module.exports = router;