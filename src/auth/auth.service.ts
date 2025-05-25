import { Injectable } from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository';
import { ReqRegistrationDTO } from './dto/req/registration.dto';
import { ReqLoginDTO } from './dto/req/login.dto';
import { ApiResponse } from '../_types/api.type';
import { ResLoginDTO } from './dto/res/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async loginUser(dto: ReqLoginDTO): Promise<ApiResponse<ResLoginDTO>> {
    const user = await this.authRepository.findUserByEmail({
      email: dto.email,
    });

    if (!user) {
      return {
        success: false,
        message: 'Incorrect email or password',
      };
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);

    if (!isMatch) {
      return {
        success: false,
        message: 'Incorrect email or password',
      };
    }

    const token = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    });

    return {
      success: true,
      message: 'Login successful',
      data: {
        token,
      },
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
        message: 'User already exists',
      };
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const newUser = await this.authRepository.registrationUser({
      ...dto,
      password: hashedPassword,
    });

    const token = await this.jwtService.signAsync({
      sub: newUser.id,
      email: newUser.email,
    });

    return {
      success: true,
      message: 'Registration successful',
      data: {
        token,
      },
    };
  }
}
