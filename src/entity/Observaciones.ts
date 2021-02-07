import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm'
import {Vehiculo} from "./Vehiculo";
import {Usuario} from "./Usuario";
import {Estado_observaciones} from "./Estado_observaciones";

@Entity()
export class Observaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  detalle: string;

  @ManyToOne(type => Estado_observaciones, estado_observaciones => estado_observaciones.observaciones)
  idestado:Vehiculo;

  @ManyToOne(type => Vehiculo, vehiculo => vehiculo.observaciones)
  idvehiculo:Vehiculo;

  @ManyToOne(type => Usuario, usuario => usuario.observacionCreado)
  creado_por:Usuario;

  @ManyToOne(type => Usuario, usuario => usuario.observacionResuelto)
  resuelto_por:Usuario;
}