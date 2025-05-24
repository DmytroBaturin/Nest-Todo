import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from '../../_entities/user.model';
import { ReqRegistrationDTO } from '../dto/req/registration.dto';
import { ResRegistrationDTO } from '../dto/res/registration.dto';

@Injectable()
export class RegistrationRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly repo: Repository<UserModel>,
  ) {}

  async validateUser(
    credentials: ReqRegistrationDTO,
  ): Promise<ResRegistrationDTO> {
    const existingUser = await this.repo.findOne({
      where: {
        email: credentials.email,
      },
    });

    return { status: existingUser ? 'user created' : 'user already exists' };
  }

  registrationUser(credentials: ReqRegistrationDTO) {
    const user = this.repo.create({
      email: credentials.email,
      password: credentials.password,
    });

    return this.repo.save(user);
  }
}
