import { Injectable } from '@nestjs/common';
import { LoginRepository } from './repository/login.repository';
import { RegistrationRepository } from './repository/registration.repository';
import { ReqRegistrationDTO } from './dto/req/registration.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly loginRepo: LoginRepository,
    private readonly registrationRepo: RegistrationRepository,
  ) {}
  loginUser() {}
  async registerUser(dto: ReqRegistrationDTO) {
    await this.registrationRepo.validateUser(dto);
  }
}
