import { IsNotEmpty } from 'class-validator';

export class ReqValidatorDTO {
  @IsNotEmpty()
  email: string;
}
