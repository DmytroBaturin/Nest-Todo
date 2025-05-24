import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TodoModel } from './todo.model';

@Entity('user')
export class UserModel {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() name: string;

  @Column() email: string;

  @Column() password: string;

  @OneToMany(() => TodoModel, (todo) => todo.owner)
  todos: TodoModel[];
}
