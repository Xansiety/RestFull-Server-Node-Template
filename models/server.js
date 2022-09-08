import express from "express"

class Server {
  constructor() {
    this.app = express() //creamos la aplicación de express
    this.port = process.env.PORT

    // Middleware
    this.Middleware()

    //Rutas de mi aplicación
    this.routes()
  }

  Middleware() {
    // Directorio publico
    this.app.use(express.static("public"))
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.send("Hello World!")
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

export default Server
