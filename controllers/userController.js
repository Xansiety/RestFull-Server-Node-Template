import { response } from "express"

const usuauriosGET = (req, res = response) => {
  res.json({ ok: true, msg: "Es una petición GET desde Controlador" })
}

const usuariosPOST = (req, res = response) => {
  res
    .status(201)
    .json({ ok: true, msg: "Es una petición POST desde Controlador" })
}

const usuariosPUT = (req, res = response) => {
  res
    .status(500)
    .json({ ok: true, msg: "Es una petición PUT desde Controlador" })
}

const usuariosDELETE = (req, res = response) => {
  res.json({ ok: true, msg: "Es una petición DELETE desde Controlador" })
}

const usuariosPATCH = (req, res = response) => {
  res.json({ ok: true, msg: "Es una petición PATCH desde Controlador" })
}

export {
  usuauriosGET,
  usuariosPOST,
  usuariosPUT,
  usuariosDELETE,
  usuariosPATCH,
}
