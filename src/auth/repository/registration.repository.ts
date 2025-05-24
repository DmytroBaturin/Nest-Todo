import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from '../../_entities/user.model';
import { ReqLoginDTO } from '../dto/req/login.dto';

@Injectable()
export class RegistrationRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly repo: Repository<UserModel>,
  ) {}

  async validateUser(credentials: ReqLoginDTO): Promise<UserModel | string> {
    const existingUser = await this.repo.findOne({
      where: {
        email: credentials.email,
      },
    });

    return existingUser ?? 'user already exist';
  }

  registrationUser() {
    return '200';
  }
}
