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
import { RoomService } from './room.service';
import { RoomDto } from './dto/expose/room.dto';
import { CreateRoomDto } from './dto/body/createRoom.dto';

@UseGuards(JwtAuthGuard)
@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get()
  @Serialize(RoomDto)
  async list() {
    return this.roomService.list();
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.roomService.delete(id);
  }

  @Post()
  @Serialize(RoomDto)
  async add(@Body() body: CreateRoomDto) {
    return this.roomService.add(body);
  }

  @Patch('/:id')
  @Serialize(RoomDto)
  async edit(@Param('id') id: number, @Body() body: CreateRoomDto) {
    return this.roomService.edit(id, body);
  }
}
