import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tokens } from '../auth/tokens.entity';

@Index('email_UNIQUE', ['email'], { unique: true })
@Entity('users', { schema: 'bookings' })
export class Users {
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

  @Column('varchar', { name: 'password', length: 300 })
  password: string;

  @OneToMany(() => Tokens, (tokens) => tokens.user)
  tokens: Tokens[];
}
