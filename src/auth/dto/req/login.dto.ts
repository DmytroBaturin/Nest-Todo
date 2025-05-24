import { IsNotEmpty } from 'class-validator';

export class ReqLoginDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
