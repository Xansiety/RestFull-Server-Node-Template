import { Router } from "express"
import {
  usuauriosGET,
  usuariosPOST,
  usuariosPUT,
  usuariosDELETE,
  usuariosPATCH,
} from "../controllers/userController.js"

export const router = Router()

router.get("/", usuauriosGET)

router.put("/", usuariosPUT)

router.post("/", usuariosPOST)

router.delete("/", usuariosDELETE)

router.patch("/", usuariosPATCH)
