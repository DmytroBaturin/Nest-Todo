import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { UserModel } from './user.model';
import { TaskModel } from './task.model';

@Entity('todo')
export class TodoModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => TaskModel, (task) => task.todo)
  tasks?: TaskModel[];

  @ManyToOne(() => UserModel, (user) => user.todos)
  owner: UserModel;
}
