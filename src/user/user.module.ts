import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../_entities/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [],
  providers: [],
})
export class UserModule {}
