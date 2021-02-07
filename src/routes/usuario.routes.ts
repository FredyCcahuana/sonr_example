import { Router } from "express";
const router = Router();

import {
  getUsers,
  signin,
  createUser,
  getUserObservaciones
} from "../controllers/usuario.controller";

router.get("/users", getUsers);
router.get("/users/signin", signin);
router.post("/users/create", createUser);
router.get("/users/observacion", getUserObservaciones);
export default router;
