import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMeetingDto } from './dto/body/createMeeting.dto';

@Injectable()
export class MeetingsService {
  constructor(private prisma: PrismaService) {}

  async list() {
    const meetings = await this.prisma.meeting.findMany({
      include: { room: true, customerRepresentative: true, invited: true },
    });

    return meetings;
  }

  async delete(id: number) {
    const deletedMeeting = await this.prisma.meeting.delete({ where: { id } });

    return deletedMeeting.id;
  }

  async add(body: CreateMeetingDto) {
    const room = await this.prisma.rooms.findFirst({
      where: { name: body.roomName },
    });

    const availableRoom = await this.prisma.meeting.findMany({
      where: {
        roomId: room.id,
        start: { gte: new Date(body.start), lte: new Date(body.end) },
        end: { gte: new Date(body.end), lte: new Date(body.end) },
      },
    });

    const representatives = [];
    for (const email of body.representativeEmails) {
      const find = await this.prisma.representative.findFirst({
        where: { email },
      });
      if (find) representatives.push(find);
    }

    const invited = [];
    for (const email of body.invitedEmails) {
      const find = await this.prisma.people.findFirst({ where: { email } });
      if (find) invited.push(find);
    }

    const newMeeting = await this.prisma.meeting.create({
      data: {
        name: body.name,
        description: body.description,
        gravity: body.gravity,
        start: new Date(body.start),
        end: new Date(body.end),
        room: { connect: { id: room.id } },
        customerRepresentative: {
          connect: representatives.map((entry) => ({ id: entry.id })),
        },
        invited: {
          connect: invited.map((entry) => ({ id: entry.id })),
        },
      },
    });

    return newMeeting;
  }

  async edit(id: number, body: CreateMeetingDto) {}
}
