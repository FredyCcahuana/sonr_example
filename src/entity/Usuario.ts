import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Observaciones } from './Observaciones';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_usuario: string;

  @Column()
  password: string;

  @OneToMany(type => Observaciones, observaciones => observaciones.creado_por)
  observacionCreado: Observaciones[];
  
  @OneToMany(type => Observaciones, observaciones => observaciones.resuelto_por)
  observacionResuelto: Observaciones[];

}