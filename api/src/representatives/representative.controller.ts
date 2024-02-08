import {
  Controller,
  UseGuards,
  Get,
  Delete,
  Param,
  Patch,
  Body,
  Post,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { RepresentativeDto } from './dto/expose/representative.dto';
import { RepresentativeService } from './representative.service';
import { CreateRepresentativeDto } from './dto/body/createRepresentative.dto';

@UseGuards(JwtAuthGuard)
@Controller('representative')
export class RepresentativeController {
  constructor(private representativeService: RepresentativeService) {}

  @Get()
  @Serialize(RepresentativeDto)
  async list() {
    return this.representativeService.list();
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.representativeService.delete(id);
  }

  @Post()
  @Serialize(RepresentativeDto)
  async add(@Body() body: CreateRepresentativeDto) {
    return this.representativeService.add(body);
  }

  @Patch('/:id')
  @Serialize(RepresentativeDto)
  async edit(@Param('id') id: number, @Body() body: CreateRepresentativeDto) {
    return this.representativeService.edit(id, body);
  }

  @Get('/:customer')
  @Serialize(RepresentativeDto)
  async findByCustomer(@Param('customer') customer: string) {
    return this.representativeService.findByCustomer(customer);
  }
}
