import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Vehiculo } from "../entity/Vehiculo";

//Registrar Vehiculo
//{ "vim": "xxxxx"} 
export const createVehiculos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log(req.body.vim);
  
  const vehiculo = await getRepository(Vehiculo).findOne(req.body.vim);
  if(vehiculo) {
    return res.status(404).json({message:'Vehiculo existe'});
  }
  const newvehiculo = await getRepository(Vehiculo).create(req.body);
  const results = await getRepository(Vehiculo).save(newvehiculo);
  return res.json(results);
};


//lista de vehiculos
export const getVehiculos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const vehiculos = await getRepository(Vehiculo).find();
  return res.json(vehiculos);
};
//Iniciar sesion
//{ "id": "1"} 
//export const getVehiculo = async (
//  req: Request,
//  res: Response
//): Promise<Response> => {
//  
//  const vehiculo = await getRepository(Vehiculo).findOne(req.params.id);  
//  if(!vehiculo) return res.status(402).json({message:'Vehiculo no encontrado'});
//  return res.json(vehiculo);
//};
