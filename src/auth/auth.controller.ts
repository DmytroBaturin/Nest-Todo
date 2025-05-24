import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ReqRegistrationDTO } from './dto/req/registration.dto';
import { ReqLoginDTO } from './dto/req/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registration')
  async registerUser(@Body() dto: ReqRegistrationDTO): Promise<void> {
    await this.authService.registerUser(dto);
  }

  @Post('login')
  async login(@Body() dto: ReqLoginDTO): Promise<void> {
    await this.authService.loginUser(dto);
  }
}
