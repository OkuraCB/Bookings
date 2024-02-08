import { DataSource } from 'typeorm';
import { Representatives } from './representative.entity';

export const representativeProvider = [
  {
    provide: 'REPRESENTATIVE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Representatives),
    inject: ['DATA_SOURCE'],
  },
];
