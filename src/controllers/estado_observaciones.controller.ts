import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Estado_observaciones } from "../entity/Estado_observaciones";

//Registrar Vehiculo
//{ "nombre": "registrada"} 
export const createEstado_observaciones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log(req.body.nombre);
  
  const estado_observaciones = await getRepository(Estado_observaciones).findOne(req.body.nombre);
  if(estado_observaciones) {
    return res.status(404).json({message:'estadoObservacion existe'});
  }
  const newEstado_observacione = await getRepository(Estado_observaciones).create(req.body);
  const results = await getRepository(Estado_observaciones).save(newEstado_observacione);
  return res.json(results);
};


//lista de Estado_observaciones
export const getEstado_observaciones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const estado_observaciones = await getRepository(Estado_observaciones).find();
  
  
  return res.json(estado_observaciones);
};

