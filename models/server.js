import express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";
import { router } from "../routes/user.js";
class Server {
  constructor() {
    this.app = express(); //creamos la aplicación de express
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // Middleware
    this.Middleware();

    //Rutas de mi aplicación
    this.routes();
  }

  Middleware() {
    //CORS
    this.app.use(cors());

    // Rate limit

    this.app.use(
      rateLimit({
        windowMs: 60000, // 15 minutes
        max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: true, // Disable the `X-RateLimit-*` headers
        statusCode: 200,
        message: {
          status: 429, // optional, of course
          limiter: true,
          type: "error",
          message: "Maximun exceded request calling API ",
        },
      })
    );

    // parseo y lectura del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    //rutas separadas
    this.app.use(this.usuariosPath, router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}

export default Server;
