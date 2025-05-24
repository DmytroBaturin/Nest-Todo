import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from '../../_entities/user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserModel) private readonly repo: Repository<UserModel>,
  ) {}
}
