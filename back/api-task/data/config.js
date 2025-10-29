// Herramienta mongoose
const mongoose = require("mongoose");
// Importamos la librería Mongoose, que permite interactuar con MongoDB usando un enfoque orientado a objetos.
const connectDB = async()=>{
    // Definimos la URL de conexión a MongoDB.
    const URL = "mongodb://starlord:fedora@localhost:27018/";
    try {
        // Intentamos conectarnos a la base de datos usando mongoose y la URL especificada.
        await mongoose.connect(URL);
        // Si la conexión fue exitosa, se imprime este mensaje.
        console.log("Database Running");
        
        }catch(error){
            // Si ocurre un error al conectarse, se imprime un mensaje indicando el fallo.
            console.error("Cant connect to database");
            // También se imprime el error exacto para poder diagnosticar el problema.
            console.error(error);

    }
    
}
// Exportamos la función connectDB para poder importarla y usarla en otros archivos del proyecto.
module.exports = {connectDB};


