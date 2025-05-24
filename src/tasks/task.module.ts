import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './repository/todo.repository';
import { TaskModel } from '../_entities/task.model';
import { TodoModel } from '../_entities/todo.model';

@Module({
  imports: [TypeOrmModule.forFeature([TodoModel, TaskModel])],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
