const TaskService = require("../services/task.services");

class TaskController {
    // Crear una nueva tarea
    async createTask(req, res) {
        const { name, description } = req.body;

        // Verificar si los campos 'name' y 'description' están presentes
        if (!name || !description) {
            return res.status(400).json({ error: "Todos los campos son requeridos" });
        }

        try {
            const task = await TaskService.createTask({ name, description }); // Pasa solo name y description
            res.status(201).json(task); 
        } catch (error) {
            res.status(500).json({ 
                error: "Error al crear la tarea", 
                message: error.message 
            });
        }
    }

    // Obtener todas las tareas
    async getAllTasks(req, res) {
        try {
            const tasks = await TaskService.getAllTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las tareas" });
        }
    }

    // Obtener una tarea por ID
    async getTaskById(req, res) {
        try {
            const task = await TaskService.getTaskById(req.params.id);
            if (!task) {
                // Validar que la tarea este encontrada
                return res.status(404).json({ error: "Tarea no encontrada" });
            }
            res.json(task);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener la tarea" });
        }
    }

    // Actualizar una tarea por ID
    async updateTask(req, res) {
        const { id } = req.params;
        const { name, description, status } = req.body;
      
        try {
            // Se actualiza solo los campos proporcionados, en este caso name, description y status
            const updatedTask = await TaskService.updateTask(id, { name, description, status });
      
            if (!updatedTask) {
                return res.status(404).json({ message: 'Tarea no encontrada' });
            }
      
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar la tarea', error });
        }
    }

    // Eliminar una tarea por ID
    async deleteTask(req, res) {
        try {
            const deletedTask = await TaskService.deleteTask(req.params.id);
            if (!deletedTask) {
                return res.status(404).json({ error: "Tarea no encontrada" });
            }
            res.json({ message: 'Tarea eliminada' });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la tarea" });
        }
    }
}

module.exports = new TaskController();
