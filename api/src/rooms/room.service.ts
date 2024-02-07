import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRoomDto } from './dto/body/createRoom.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async list() {
    const rooms = await this.prisma.rooms.findMany();
    return rooms;
  }

  async delete(id: number) {
    const deletedRoom = await this.prisma.rooms.delete({
      where: { id: id },
    });

    return deletedRoom.id;
  }

  async add(body: CreateRoomDto) {
    const newRoom = await this.prisma.rooms.create({ data: body });

    return newRoom;
  }

  async edit(id: number, body: CreateRoomDto) {
    const editedRoom = await this.prisma.rooms.update({
      where: { id },
      data: body,
    });

    return editedRoom;
  }
}
