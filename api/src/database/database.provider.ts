import { Tokens } from 'src/auth/tokens.entity';
import { Meeting } from 'src/meetings/meeting.entity';
import { Meetingtopeople } from 'src/meetings/meetingToPeople.entity';
import { Meetingtorepresentative } from 'src/meetings/meetingToRepresentative.entity';
import { People } from 'src/people/people.entity';
import { Representatives } from 'src/representatives/representative.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Users } from 'src/users/users.entity';
import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '@8@1@4Cb',
        database: 'bookings',
        entities: [
          Meeting,
          Meetingtorepresentative,
          Meetingtopeople,
          Tokens,
          People,
          Representatives,
          Rooms,
          Users,
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
