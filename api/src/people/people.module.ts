import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { DatabaseModule } from 'src/database/database.module';
import { peopleProvider } from './people.provider';

@Module({
  exports: [PeopleService],
  imports: [DatabaseModule],
  controllers: [PeopleController],
  providers: [...peopleProvider, PeopleService, JwtService, PrismaService],
})
export class PeopleModule {}
