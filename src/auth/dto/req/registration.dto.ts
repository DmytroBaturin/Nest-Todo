import { IsNotEmpty } from 'class-validator';

export class ReqRegistrationDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  repeatPassword: string;
}
