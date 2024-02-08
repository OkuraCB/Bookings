import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { MeetingsController } from './meetings.controller';
import { MeetingsService } from './meetings.service';

@Module({
  exports: [MeetingsService],
  controllers: [MeetingsController],
  providers: [MeetingsService, JwtService, PrismaService],
})
export class MeetingsModule {}
