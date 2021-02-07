import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Observaciones } from './Observaciones';

@Entity()
export class Vehiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vim: string;
  
  @OneToMany(type => Observaciones, observaciones => observaciones.idvehiculo)
  observaciones: Observaciones[];
}