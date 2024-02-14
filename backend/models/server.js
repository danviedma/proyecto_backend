const express = require('express');
const {connectDB} = require('../config/database');
const cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.projectsPath = '/api/projects';
        
        this.middlewares();

        this.initCors();
        this.routes();
        this.dbConnection();

       
    }

    async dbConnection() {
        await connectDB();
    }

    initCors() {
        // Habilita CORS para todas las rutas
        this.app.use(cors());
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.projectsPath, require('../routes/projectRoutes'));
    }

   

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;
