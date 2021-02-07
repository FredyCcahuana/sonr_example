import { Router } from "express";
const router = Router();

import {
  createEstado_observaciones,
  getEstado_observaciones,
  //getVehiculo

} from "../controllers/estado_observaciones.controller";

router.post("/Estado_observaciones/create", createEstado_observaciones);
router.get("/Estado_observaciones/list", getEstado_observaciones);
//router.get("/Estado_observaciones/one", getVehiculo);
//router.put("/users/:id", updateUser);
//router.delete("/users/:id", deleteUser);

export default router;
