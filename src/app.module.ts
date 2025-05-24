import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './tasks/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      logging: true,
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'db',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    TaskModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
