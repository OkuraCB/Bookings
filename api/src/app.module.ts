import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PeopleModule } from './people/people.module';
import { RepresentativeModule } from './representatives/representative.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    PeopleModule,
    RepresentativeModule,
  ],
})
export class AppModule {}
