import { DataSource } from 'typeorm';
import { People } from './people.entity';

export const peopleProvider = [
  {
    provide: 'PEOPLE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(People),
    inject: ['DATA_SOURCE'],
  },
];
