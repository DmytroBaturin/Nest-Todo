import { Injectable } from '@nestjs/common';
import { LoginRepository } from './repository/login.repository';
import { RegistrationRepository } from './repository/registration.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly loginRepo: LoginRepository,
    private readonly registrationRepo: RegistrationRepository,
  ) {}
}
