import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTodoDto } from './dto/req/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  async createTask(@Body() params: CreateTodoDto) {
    await this.taskService.createTask(params);
    return '200';
  }
}
