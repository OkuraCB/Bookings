import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';

@Index('fk_tokens_users1_idx', ['userId'], {})
@Entity('tokens', { schema: 'bookings' })
export class Tokens {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('timestamp', {
    name: 'create_time',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date | null;

  @Column('timestamp', { name: 'update_time', nullable: true })
  updateTime: Date | null;

  @Column('tinyint', { name: 'active', width: 1, default: () => "'1'" })
  active: boolean;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'token', length: 3000 })
  token: string;

  @ManyToOne(() => Users, (users) => users.tokens, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;
}
