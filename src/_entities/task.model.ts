import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TodoModel } from './todo.model';
import { IsOptional } from 'class-validator';

export enum StatusEnum {
  Pending = 'pending',
  Done = 'done',
  Cancelled = 'cancelled',
}

@Entity('task')
export class TaskModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description?: string;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.Pending })
  @IsOptional()
  status?: StatusEnum;

  @ManyToOne(() => TodoModel, (todo) => todo.tasks)
  todo?: TodoModel;
}
