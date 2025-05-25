import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoModel } from '../../_entities/todo.model';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectRepository(TodoModel)
    private readonly repo: Repository<TodoModel>,
  ) {}

  async createTodo(data: Partial<TodoModel>): Promise<TodoModel> {
    const todo = this.repo.create(data);
    return this.repo.save(todo);
  }
}
