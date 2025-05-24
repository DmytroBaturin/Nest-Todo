import { ConflictException, Injectable } from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository';
import { ReqRegistrationDTO } from './dto/req/registration.dto';
import { ResLoginDTO } from './dto/res/login.dto';
import { ReqLoginDTO } from './dto/req/login.dto';
import { mapUserToResponse } from './mapper/user.mapper';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async loginUser(dto: ReqLoginDTO): Promise<ResLoginDTO | null> {
    const user = await this.authRepository.findUserByEmail({
      email: dto.email,
    });

    console.log(user);

    if (user && dto.password === user.password) {
      return mapUserToResponse(user);
    }
    return null;
  }

  async registerUser(dto: ReqRegistrationDTO): Promise<void> {
    const existingUser = await this.authRepository.findUserByEmail({
      email: dto.email,
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    await this.authRepository.registrationUser(dto);
  }
}
