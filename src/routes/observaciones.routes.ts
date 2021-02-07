import { Router } from "express";
const router = Router();

import {
  createobservaciones,
  getobservaciones,
  updateState,
  updateObservation,
  deleteObservation

} from "../controllers/obervaciones.controller";

router.post("/observaciones/create", createobservaciones);
router.get("/observaciones/list", getobservaciones);
router.put("/observaciones/state", updateState);
router.put("/observaciones/observation", updateObservation);
router.delete("/observaciones/delete", deleteObservation);

export default router;
