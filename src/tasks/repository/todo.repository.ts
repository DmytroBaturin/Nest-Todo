import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from '../dto/req/create-task.dto';
import { TodoModel } from '../../_entities/todo.model';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectRepository(TodoModel)
    private readonly repo: Repository<TodoModel>,
  ) {}

  async create(dto: CreateTodoDto): Promise<TodoModel> {
    const task = this.repo.create(dto);
    return this.repo.save(task);
  }
}
