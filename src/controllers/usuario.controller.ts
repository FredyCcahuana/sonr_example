import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Usuario } from "../entity/Usuario";
import { Observaciones } from "../entity/Observaciones";
//lista usuarios
export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(Usuario).find();
  return res.json(users);
};
//Iniciar sesion
//{ "nombre_usuario": "lucas", "password" :"lucas"} 
export const signin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  
  const user:any = await getRepository(Usuario).findOne(req.body.nombre_usuario);  
  if(!user) return res.status(402).json({message:'Usuario incorrecto'});
  if(user.password != req.body.password) return res.status(402).json({message:'password incorrecto'});
  return res.json(user);
};
//Registrar usuario
//{ "nombre_usuario": "lucas", "password" :"lucas"} 
export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log(req.body);
  
  const currentUser = await getRepository(Usuario).findOne(req.body.nombre_usuario);
  console.log(currentUser);
  
  if(currentUser) {
    return res.status(404).json({message:'Usuario existe'});
  }
  const newUser = await getRepository(Usuario).create(req.body);
  const results = await getRepository(Usuario).save(newUser);
  return res.json(results);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(Usuario).findOne(req.body.id);
  if (user) {
    getRepository(Usuario).merge(user, req.body);
    const results = await getRepository(Usuario).save(user);
    return res.json(results);
  }

  return res.json({msg: 'Not user found'});
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Usuario).delete(req.body.id);
  return res.json(results);
};

//lista usuarios
export const getUserObservaciones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let users:any = await getRepository(Usuario).find({relations:["observacionCreado","observacionResuelto"]});
  let data = [];
  for(let i=0;i<users.length;i++){
    //cantidad creadas
    //const observacioness = await getRepository(Observaciones).find(
    //  { where:{users},
    //    relations: ["idestado","idvehiculo","creado_por","resuelto_por"] 
    //  }
    //);
    data.push({
      nombre_usuario:users[i].nombre_usuario,
      observacionCreado:users[i].observacionCreado.length,
      observacionResuelto:users[i].observacionResuelto.length
    })
  }
  
  return res.json(data);
};