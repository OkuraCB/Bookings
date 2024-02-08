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
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { MeetingsService } from './meetings.service';
import { MeetingDto } from './dto/expose/meeting.dto';
import { CreateMeetingDto } from './dto/body/createMeeting.dto';

@UseGuards(JwtAuthGuard)
@Controller('meetings')
export class MeetingsController {
  constructor(private meetingsService: MeetingsService) {}

  @Get()
  @Serialize(MeetingDto)
  async list() {
    return this.meetingsService.list();
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.meetingsService.delete(id);
  }

  @Post()
  async add(@Body() body: CreateMeetingDto) {
    return this.meetingsService.add(body);
  }

  @Patch('/:id')
  @Serialize(MeetingDto)
  async edit(@Param('id') id: number, @Body() body: CreateMeetingDto) {
    return this.meetingsService.edit(id, body);
  }
}
