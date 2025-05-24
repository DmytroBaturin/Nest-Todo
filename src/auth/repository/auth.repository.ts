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

  async registrationUser(credentials: ReqRegistrationDTO): Promise<UserModel> {
    const user = this.repo.create({
      email: credentials.email,
      password: credentials.password,
    });

    return await this.repo.save(user);
  }
}
