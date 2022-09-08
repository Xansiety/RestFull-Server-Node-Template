import express from "express"

class Server {
  constructor() {
    this.app = express() //creamos la aplicación de express
    this.port = process.env.PORT
    this.routes()
  }

  routes() {
    this.app.get("/", (req, res) => {
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
