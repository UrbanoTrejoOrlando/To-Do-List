# Frontend - To-Do-List

Interfaz de usuario desarrollada con **React y Vite** para interactuar con la API del backend.

### Instalación

1. Ir a la carpeta frontend:  
   ```bash
   cd frontend
2. Instalar dependencias:
   ```bash
    npm install
3. Configurar URL del backend en **src/common/servers.js**
   ```bash
     const URL_BACKEND  = "http://localhost:3001/task"
     export {URL_BACKEND};
4. Levantar servidor de desarrollo:
   ```bash
    npm run dev
   
### Funcionalidades
  - Listar tareas
  - Crear nueva tarea
  - Marcar tarea como completada
  - Eliminar tarea

### Notas 
  - **Actualmente depende del backend para funcionar completamente.**
