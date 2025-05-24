import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ReqRegistrationDTO } from './dto/req/registration.dto';

@Controller('auth')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  loginUser() {}
  @Post('registration')
  async registerUser(dto: ReqRegistrationDTO): Promise<void> {}
}
