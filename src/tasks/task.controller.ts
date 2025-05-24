import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTodoDto } from './dto/req/create-task.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async createTask(@Body() params: CreateTodoDto) {
    await this.taskService.createTask(params);
    return '200';
  }
}
