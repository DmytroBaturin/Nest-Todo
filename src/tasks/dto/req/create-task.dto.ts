import { IsNotEmpty, IsString } from 'class-validator';

type Status = 'pending' | 'done' | 'cancelled';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: Status;
}
