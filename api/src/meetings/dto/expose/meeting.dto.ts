import { Expose } from 'class-transformer';
import { PeopleDto } from 'src/people/dto/expose/people.dto';
import { RepresentativeDto } from 'src/representatives/dto/expose/representative.dto';
import { RoomDto } from 'src/rooms/dto/expose/room.dto';

export class MeetingDto {
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  start: Date;

  @Expose()
  end: Date;

  @Expose()
  room: RoomDto;

  @Expose()
  customerRepresentative: RepresentativeDto[];

  @Expose()
  invited: PeopleDto[];

  @Expose()
  gravity: string;
}
