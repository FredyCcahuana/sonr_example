import { Router } from "express";
const router = Router();

import {
  createVehiculos,
  getVehiculos,
  //getVehiculo

} from "../controllers/vehiculo.controller";

router.post("/vehiculos/create", createVehiculos);
router.get("/vehiculos/list", getVehiculos);
//router.get("/vehiculos/one", getVehiculo);
//router.put("/users/:id", updateUser);
//router.delete("/users/:id", deleteUser);

export default router;
