import express from "express"
import cors from "cors"
import { router } from "../routes/user.js"
class Server {
  constructor() {
    this.app = express() //creamos la aplicación de express
    this.port = process.env.PORT
    this.usuariosPath = "/api/usuarios"

    // Middleware
    this.Middleware()

    //Rutas de mi aplicación
    this.routes()
  }

  Middleware() {
    //CORS
    this.app.use(cors())

    // parseo y lectura del body
    this.app.use(express.json())

    // Directorio publico
    this.app.use(express.static("public"))
  }

  routes() {
    //rutas separadas
    this.app.use(this.usuariosPath, router)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

export default Server
