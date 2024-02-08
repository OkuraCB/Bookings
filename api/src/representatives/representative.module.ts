import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { RepresentativeService } from './representative.service';
import { RepresentativeController } from './representative.controller';
import { DatabaseModule } from 'src/database/database.module';
import { representativeProvider } from './representative.provider';

@Module({
  exports: [RepresentativeService],
  imports: [DatabaseModule],
  controllers: [RepresentativeController],
  providers: [
    ...representativeProvider,
    RepresentativeService,
    JwtService,
    PrismaService,
  ],
})
export class RepresentativeModule {}
