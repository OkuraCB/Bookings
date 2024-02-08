import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Meeting } from './Meeting';
import { People } from '../people/people.entity';

@Index('_MeetingToPeople_AB_unique', ['a', 'b'], { unique: true })
@Index('_MeetingToPeople_B_index', ['b'], {})
@Entity('_meetingtopeople', { schema: 'bookings' })
export class Meetingtopeople {
  @Column('int', { name: 'A' })
  a: number;

  @Column('int', { name: 'B' })
  b: number;

  @ManyToOne(() => Meeting, (meeting) => meeting.meetingtopeople, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'A', referencedColumnName: 'id' }])
  a2: Meeting;

  @ManyToOne(() => People, (people) => people.meetingtopeople, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'B', referencedColumnName: 'id' }])
  b2: People;
}
