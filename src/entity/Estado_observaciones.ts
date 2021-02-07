import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Observaciones } from './Observaciones';

@Entity()
export class Estado_observaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @OneToMany(type => Observaciones, observaciones => observaciones.idestado)
  observaciones: Observaciones[];
}