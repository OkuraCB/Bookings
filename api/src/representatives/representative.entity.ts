import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Meetingtorepresentative } from '../meetings/Meetingtorepresentative';

@Index('email_UNIQUE', ['email'], { unique: true })
@Entity('representatives', { schema: 'bookings' })
export class Representatives {
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

  @Column('varchar', { name: 'customer', length: 100 })
  customer: string;

  @OneToMany(
    () => Meetingtorepresentative,
    (meetingtorepresentative) => meetingtorepresentative.b2,
  )
  meetingtorepresentatives: Meetingtorepresentative[];
}
