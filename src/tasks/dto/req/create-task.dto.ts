import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Column } from 'typeorm';
import { StatusEnum } from '../../../_entities/task.model';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  description?: string;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.Pending })
  @IsOptional()
  status?: StatusEnum;
}
