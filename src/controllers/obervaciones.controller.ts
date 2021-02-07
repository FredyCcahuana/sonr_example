import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Observaciones } from "../entity/Observaciones";

//Registrar Observaciones
//{ "detalle": "xxxxx","idvehiculo": "1","creado_por": "1","idestado": "registrada"} 
export const createobservaciones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log(req.body);
  const newObservaciones = await getRepository(Observaciones).create(req.body);
  const results = await getRepository(Observaciones).save(newObservaciones);
  return res.json(results);
};


//lista de Observacioness
export const getobservaciones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const observacioness = await getRepository(Observaciones).find(
    { relations: ["idestado","idvehiculo","creado_por","resuelto_por"] }
  );
  console.log(observacioness);
  return res.json(observacioness);
};

//actualizar estado aceptar o rechazar
//{ "id": "1","idestado": "11"} 
export const updateState = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const observacioness: any = await getRepository(Observaciones).findOne({id:req.body.id});
  observacioness.idestado = req.body.idestado;
  await getRepository(Observaciones).save(observacioness);
  console.log(observacioness);
  return res.json(observacioness);
};

//actualizar observacion 
//{ "id": "1","detalle": "2222222", "resuelto_por":"11"} 
export const updateObservation = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const observacioness: any = await getRepository(Observaciones).findOne({id:req.body.id});
  observacioness.detalle = req.body.detalle;
  observacioness.resuelto_por = req.body.resuelto_por;
  await getRepository(Observaciones).save(observacioness);
  console.log(observacioness);
  return res.json(observacioness);
};

//eliminar observacion 
//{ "id": "1"}
export const deleteObservation = async (req: Request, res: Response): Promise<Response> => {
  let observaciones:any = await getRepository(Observaciones).findOne({id:req.body.id});
  const results = await getRepository(Observaciones).remove(observaciones);
  console.log(results);
  
  return res.json(results);
};