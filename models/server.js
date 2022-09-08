import express from "express"
import cors from "cors"

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
    //CORS
    this.app.use(cors())
    // Directorio publico
    this.app.use(express.static("public"))
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({ ok: true, msg: "Es una petición GET a mi api" })
    })

    this.app.put("/api", (req, res) => {
      res.status(500).json({ ok: true, msg: "Es una petición PUT a mi api" })
    })

    this.app.post("/api", (req, res) => {
      res.status(201).json({ ok: true, msg: "Es una petición POST a mi api" })
    })

    this.app.delete("/api", (req, res) => {
      res.json({ ok: true, msg: "Es una petición DELETE a mi api" })
    })

    this.app.patch("/api", (req, res) => {
      res.json({ ok: true, msg: "Es una petición PATCH a mi api" })
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

export default Server
