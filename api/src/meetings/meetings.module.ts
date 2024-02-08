import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { MeetingsController } from './meetings.controller';
import { MeetingsService } from './meetings.service';
import { DatabaseModule } from 'src/database/database.module';
import { meetingsProvider } from './meetings.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meeting } from './meeting.entity';
import { Meetingtopeople } from './meetingToPeople.entity';
import { Meetingtorepresentative } from './meetingToRepresentative.entity';

@Module({
  exports: [MeetingsService],
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      Meeting,
      Meetingtopeople,
      Meetingtorepresentative,
    ]),
  ],
  controllers: [MeetingsController],
  providers: [...meetingsProvider, MeetingsService, JwtService, PrismaService],
})
export class MeetingsModule {}
