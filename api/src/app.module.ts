import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PeopleModule } from './people/people.module';
import { RepresentativeModule } from './representatives/representative.module';
import { RoomModule } from './rooms/room.module';
import { MeetingsModule } from './meetings/meetings.module';
import { Meeting } from './meetings/meeting.entity';
import { Meetingtorepresentative } from './meetings/meetingToRepresentative.entity';
import { Meetingtopeople } from './meetings/meetingToPeople.entity';
import { Tokens } from './auth/tokens.entity';
import { People } from './people/people.entity';
import { Representatives } from './representatives/representative.entity';
import { Rooms } from './rooms/rooms.entity';
import { Users } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@8@1@4Cb',
      database: 'bookings',
      autoLoadEntities: true,
      entities: [
        Meeting,
        Meetingtorepresentative,
        Meetingtopeople,
        Tokens,
        People,
        Representatives,
        Rooms,
        Users,
      ],
      synchronize: true,
    }),
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
