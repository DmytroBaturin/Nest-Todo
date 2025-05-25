import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTodoDto } from './dto/req/create-task.dto';
import { AuthGuard } from '../_common/auth.guard';
import { CurrentUser } from '../_common/current-user.decorator';
import { TaskModel } from '../_entities/task.model';
import { JwtPayload } from '../_types/jwt.type';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async createTask(
    @Body() params: CreateTodoDto,
    @CurrentUser() currentUser: JwtPayload,
  ): Promise<TaskModel> {
    return await this.taskService.createTodo(params, currentUser.sub);
  }
}
