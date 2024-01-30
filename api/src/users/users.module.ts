import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Module({
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService, JwtService, PrismaService],
})
export class UsersModule {}
