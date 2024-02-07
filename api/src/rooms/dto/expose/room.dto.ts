import { Expose } from 'class-transformer';

export class RoomDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  capacity: number;
}
