
# API-TASK
## Descripción 
**API-TASK** es una API REST desarrollada en **Node.js** que permite la gestión de tareas, implementando operaciones CRUD (Crear, Leer, Actualizar y Eliminar).
## Funcionalidades

- **CREATE**: Permite crear nuevas tareas. 
- **READ**: Obtiene la lista completa de tareas o una tarea específica.
- **UPDATE**: Permite modificar los detalles de una tarea existente. 
- **DELETE**: Elimina una tarea por su ID.  

## Tecnologías utilizadas
- Node.js  
- Express.js  
- MongoDB  
- Mongoose

## Instalación

1.- Clonar el repositorio
```bash
git clone git@github.com:UrbanoTrejoOrlando/API_TASK.git
```
2.- Navegar al directorio del proyecto
```bash
cd API_TASK
```
3.- Instala las dependencias
```bash
npm install
```
4.- Inicia el servidor
- En **modo desarrollo**
```bash
npm run dev
```
- En **modo producción**
```bash
npm start
```  

## Rutas de la API

| Método | Ruta         | Descripción                    |
|--------|--------------|--------------------------------|
| POST   | `/task`     | Crear una nueva tarea          |
| GET    | `/task`     | Obtener todas las tareas       |
| GET    | `/task/:id` | Obtener una tarea por el ID   |
| PUT    | `/task/:id` | Actualizar una tarea existente |
| DELETE | `/task/:id` | Eliminar una tarea             |

## Ejemplos de uso en Postman 
### 🔸 Crear una nueva tarea (POST `/task`)

- **URL:** `http://localhost:3001/task`
- **Método:** POST
- **Body (JSON):**

```json
{
  "title": "Aprender Node.js",
  "description": "Estudiar los fundamentos de Node.js y Express"
}
```
- **Respuesta esperada: 201 Created**
```json
{
  "title": "Aprender Node.js",
  "description": "Estudiar los fundamentos de Node.js y Express"
  "status": false,
  "_id": "680194e267845e2e373e3215",
  "__v": 0
}
```

### 🔸 Obtener todas las tareas (GET `/task`)
- **URL:** `http://localhost:3001/task`
- **Método:** GET
- **Respuesta esperada: 200 OK**
```json
[
  {
    "_id": "680194e267845e2e373e3215",
    "title": "Aprender Node.js",
    "description": "Estudiar los fundamentos de Node.js y Express",
    "status": false,
    "__v": 0
  },
  {
    "_id": "680194e267845e2e373e3216",
    "title": "Tarea 2",
    "description": "Completar el README",
    "status": true,
    "__v": 0
  }
]
```

### 🔸 Obtener una tarea por el ID (GET `/task/:id`)
- **URL:** `http://localhost:3001/task/680194e267845e2e373e3215`
- **Método:** GET
- **Respuesta esperada: 200 OK**
```json
  {
    "_id": "680194e267845e2e373e3215",
    "title": "Aprender Node.js",
    "description": "Estudiar los fundamentos de Node.js y Express",
    "status": false,
    "__v": 0
  }
```

### 🔸 Actualizar una tarea (PUT `/task/:id`)
- **URL:** `http://localhost:3001/task/680194e267845e2e373e3215`
**Método:** PUT
- **Body (JSON):**
```json
{
  "status": "true"
}
```
- **Respuesta esperada: 200 OK**
```json
 {
    "_id": "680194e267845e2e373e3215",
    "title": "Aprender Node.js",
    "description": "Estudiar los fundamentos de Node.js y Express",
    "status": true,
    "__v": 0
  }
```
### 🔸 Eliminar una tarea (DELETE `/task/:id`)
- **URL:** `http://localhost:3001/task/680194e267845e2e373e3215`
**Método:** DELETE
- **Respuesta esperada: 200 OK**
```json
 {
    "message": "Tarea eliminada"
 }
```
