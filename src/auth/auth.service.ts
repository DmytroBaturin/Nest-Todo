import { Injectable } from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository';
import { ReqRegistrationDTO } from './dto/req/registration.dto';
import { ReqLoginDTO } from './dto/req/login.dto';
import { mapUserToResponse } from './mapper/user.mapper';
import { ApiResponse } from '../_types/api.dto';
import { ResLoginDTO } from './dto/res/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async loginUser(dto: ReqLoginDTO): Promise<ApiResponse<ResLoginDTO>> {
    const user = await this.authRepository.findUserByEmail({
      email: dto.email,
    });

    if (user && dto.password === user.password) {
      return {
        success: true,
        message: 'User already logged in',
        data: mapUserToResponse(user),
      };
    }
    return {
      success: false,
      message: 'Incorrect email or password',
    };
  }

  async registerUser(
    dto: ReqRegistrationDTO,
  ): Promise<ApiResponse<ResLoginDTO>> {
    const existingUser = await this.authRepository.findUserByEmail({
      email: dto.email,
    });
    if (existingUser) {
      return {
        success: false,
        message: 'User already exist',
      };
    }
    const newUser = await this.authRepository.registrationUser(dto);
    return {
      success: true,
      message: 'User already registered',
      data: mapUserToResponse(newUser),
    };
  }
}
