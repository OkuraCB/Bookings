import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Meeting } from './meeting.entity';
import { Representatives } from '../representatives/representative.entity';

@Index('_MeetingToRepresentative_AB_unique', ['a', 'b'], { unique: true })
@Index('_MeetingToRepresentative_B_index', ['b'], {})
@Entity('_meetingtorepresentative', { schema: 'bookings' })
export class Meetingtorepresentative {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'A' })
  a: number;

  @Column('int', { name: 'B' })
  b: number;

  @ManyToOne(() => Meeting, (meeting) => meeting.meetingtorepresentatives, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'A', referencedColumnName: 'id' }])
  a2: Meeting;

  @ManyToOne(
    () => Representatives,
    (representatives) => representatives.meetingtorepresentatives,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'B', referencedColumnName: 'id' }])
  b2: Representatives;
}
