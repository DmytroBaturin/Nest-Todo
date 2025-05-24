import { Injectable } from '@nestjs/common';
import { TaskRepository } from './repository/todo.repository';
import { TodoModel } from 'src/models/todo.model';
import { CreateTodoDto } from './dto/req/create-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepo: TaskRepository) {}

  async createTask(dto: CreateTodoDto): Promise<TodoModel> {
    return this.taskRepo.create(dto);
  }
}
