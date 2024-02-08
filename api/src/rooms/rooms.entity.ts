import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Meeting } from '../meetings/Meeting';

@Entity('rooms', { schema: 'bookings' })
export class Rooms {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('timestamp', {
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column('timestamp', { name: 'update_time', nullable: true })
  updateTime: Date | null;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Column('int', { name: 'capacity' })
  capacity: number;

  @OneToMany(() => Meeting, (meeting) => meeting.room)
  meetings: Meeting[];
}
