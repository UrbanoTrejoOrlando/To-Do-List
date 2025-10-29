// models/taskModel.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la tarea es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripción de la tarea es obligatoria']
    },
    status: {
        type: Boolean,
        default: false // ← todas las tareas nuevas serán "pendientes"
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
