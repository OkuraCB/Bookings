import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { DatabaseModule } from 'src/database/database.module';
import { usersProvider } from './users.provider';

@Module({
  exports: [UsersService],
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...usersProvider, UsersService, JwtService, PrismaService],
})
export class UsersModule {}
