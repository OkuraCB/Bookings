import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { DatabaseModule } from 'src/database/database.module';
import { roomsProvider } from './rooms.provider';

@Module({
  exports: [RoomService],
  imports: [DatabaseModule],
  controllers: [RoomController],
  providers: [...roomsProvider, RoomService, JwtService, PrismaService],
})
export class RoomModule {}
