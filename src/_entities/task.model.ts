import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TodoModel } from './todo.model';

export type Status = 'pending' | 'done' | 'cancelled';

@Entity('task')
export class TaskModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: Status;

  @ManyToOne(() => TodoModel, (todo) => todo.tasks)
  todo: TodoModel;
}
