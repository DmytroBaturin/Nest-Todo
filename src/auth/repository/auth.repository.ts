import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from '../../_entities/user.model';
import { ReqRegistrationDTO } from '../dto/req/registration.dto';
import { ReqValidatorDTO } from '../dto/req/validator.dto';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly repo: Repository<UserModel>,
  ) {}

  async findUserByEmail(credentials: ReqValidatorDTO) {
    const existingUser = await this.repo.findOne({
      where: {
        email: credentials.email,
      },
    });

    return existingUser ? existingUser : null;
  }

  registrationUser(credentials: ReqRegistrationDTO) {
    console.log(credentials);
    const user = this.repo.create({
      email: credentials.email,
      password: credentials.password,
    });

    return this.repo.save(user);
  }
}
