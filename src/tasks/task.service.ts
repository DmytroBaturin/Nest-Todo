import { Injectable } from '@nestjs/common';
import { TaskRepository } from './repository/todo.repository';
import { CreateTodoDto } from './dto/req/create-task.dto';
import { TodoModel } from '../_entities/todo.model';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepo: TaskRepository) {}

  async createTask(dto: CreateTodoDto): Promise<TodoModel> {
    return this.taskRepo.create(dto);
  }
}
