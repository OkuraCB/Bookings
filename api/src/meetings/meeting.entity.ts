import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Meetingtopeople } from './meetingToPeople.entity';
import { Meetingtorepresentative } from './meetingToRepresentative.entity';
import { Rooms } from '../rooms/rooms.entity';

@Index('fk_meeting_room1', ['roomId'], {})
@Entity('meeting', { schema: 'bookings' })
export class Meeting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('timestamp', {
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column('timestamp', { name: 'update_time', nullable: true })
  updateTime: Date | null;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'description', nullable: true, length: 191 })
  description: string | null;

  @Column('datetime', { name: 'start' })
  start: Date;

  @Column('datetime', { name: 'end' })
  end: Date;

  @Column('varchar', { name: 'gravity', length: 191 })
  gravity: string;

  @Column('int', { name: 'roomId', nullable: true })
  roomId: number | null;

  @OneToMany(() => Meetingtopeople, (meetingtopeople) => meetingtopeople.a2)
  meetingtopeople: Meetingtopeople[];

  @OneToMany(
    () => Meetingtorepresentative,
    (meetingtorepresentative) => meetingtorepresentative.a2,
  )
  meetingtorepresentatives: Meetingtorepresentative[];

  @ManyToOne(() => Rooms, (rooms) => rooms.meetings, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'roomId', referencedColumnName: 'id' }])
  room: Rooms;
}
