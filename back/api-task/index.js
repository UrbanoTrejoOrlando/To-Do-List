const express = require("express");
const cors = require("cors");
const { connectDB } = require("./data/config");
const userRoutes = require("./routes/task.routes");

const PORT = 3001;

//crear la instancia del servidor
const app = express();
app.use(express.json());
app.use(cors());


app.use('/task', userRoutes);

// Agregar la conexion a la base de datos 
connectDB();

app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
});



