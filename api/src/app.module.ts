import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PeopleModule } from './people/people.module';
import { RepresentativeModule } from './representatives/representative.module';
import { RoomModule } from './rooms/room.module';
import { MeetingsModule } from './meetings/meetings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    PeopleModule,
    RepresentativeModule,
    RoomModule,
    MeetingsModule,
  ],
})
export class AppModule {}
