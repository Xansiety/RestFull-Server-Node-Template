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

router.put("/:id", usuariosPUT)

router.post("/", usuariosPOST)

router.delete("/:id", usuariosDELETE)

router.patch("/", usuariosPATCH)
