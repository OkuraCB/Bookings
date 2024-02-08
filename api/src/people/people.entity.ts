import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Meetingtopeople } from '../meetings/Meetingtopeople';

@Index('email_UNIQUE', ['email'], { unique: true })
@Entity('people', { schema: 'bookings' })
export class People {
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

  @Column('varchar', { name: 'email', unique: true, length: 300 })
  email: string;

  @OneToMany(() => Meetingtopeople, (meetingtopeople) => meetingtopeople.b2)
  meetingtopeople: Meetingtopeople[];
}
