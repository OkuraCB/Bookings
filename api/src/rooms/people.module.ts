import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';

@Module({
  exports: [PeopleService],
  controllers: [PeopleController],
  providers: [PeopleService, JwtService, PrismaService],
})
export class PeopleModule {}
