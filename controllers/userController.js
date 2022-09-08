import { request, response } from "express"

const usuauriosGET = (req = request, res = response) => {
  const { mombre = "NO_NAME", q } = req.query

  res.json({
    ok: true,
    msg: "Es una petición GET desde Controlador",
    mombre,
    q,
  })
}

const usuariosPOST = (req = request, res = response) => {
  //   const body = req.body
  const { nombre, edad } = req.body

  res.status(201).json({
    ok: true,
    msg: "Es una petición POST desde Controlador",
    nombre,
    edad,
  })
}

const usuariosPUT = (req = request, res = response) => {
  const id = req.params.id

  res
    .status(200)
    .json({ ok: true, msg: "Es una petición PUT desde Controlador", id })
}

const usuariosDELETE = (req = request, res = response) => {
  const id = req.params.id
  res.json({ ok: true, msg: "Es una petición DELETE desde Controlador", id })
}

const usuariosPATCH = (req = request, res = response) => {
  res.json({ ok: true, msg: "Es una petición PATCH desde Controlador" })
}

export {
  usuauriosGET,
  usuariosPOST,
  usuariosPUT,
  usuariosDELETE,
  usuariosPATCH,
}
