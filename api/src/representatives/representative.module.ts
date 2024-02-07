import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { RepresentativeService } from './representative.service';
import { RepresentativeController } from './representative.controller';

@Module({
  exports: [RepresentativeService],
  controllers: [RepresentativeController],
  providers: [RepresentativeService, JwtService, PrismaService],
})
export class RepresentativeModule {}
