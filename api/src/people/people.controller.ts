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
import { PeopleService } from './people.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { PeopleDto } from './dto/expose/people.dto';
import { CreatePeopleDto } from './dto/body/createPeople.dto';

@UseGuards(JwtAuthGuard)
@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Get()
  @Serialize(PeopleDto)
  async list() {
    return this.peopleService.list();
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.peopleService.delete(id);
  }

  @Post()
  @Serialize(PeopleDto)
  async add(@Body() body: CreatePeopleDto) {
    return this.peopleService.add(body);
  }

  @Patch('/:id')
  @Serialize(PeopleDto)
  async edit(@Param('id') id: number, @Body() body: CreatePeopleDto) {
    return this.peopleService.edit(id, body);
  }
}
