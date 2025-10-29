const Task = require('../model/task.models');

class TaskService {
    async createTask(taskData) {
        try {
            const task = new Task(taskData); // Solo usa el modelo de Task
            return await task.save();
        } catch (error) {
            throw new Error(`Error al crear la tarea: ${error.message}`);
        }
    }

    async getAllTasks() {
        try {
            return await Task.find(); // Obtener todas las tareas
        } catch (error) {
            throw new Error(`Error al obtener las tareas: ${error.message}`);
        }
    }

    async getTaskById(id) {
        try {
            return await Task.findById(id); // Buscar tarea por ID
        } catch (error) {
            throw new Error(`Error al obtener la tarea: ${error.message}`);
        }
    }

    async updateTask(id, updatedData) {
        try {
            return await Task.findByIdAndUpdate(id, updatedData, { new: true }); // Actualizar tarea por ID
        } catch (error) {
            throw new Error(`Error al actualizar la tarea: ${error.message}`);
        }
    }

    async deleteTask(id) {
        try {
            return await Task.findByIdAndDelete(id); // Eliminar tarea por ID
        } catch (error) {
            throw new Error(`Error al eliminar la tarea: ${error.message}`);
        }
    }
}

module.exports = new TaskService();