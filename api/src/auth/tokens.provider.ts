import { DataSource } from 'typeorm';
import { Tokens } from './tokens.entity';

export const tokenProvider = [
  {
    provide: 'TOKEN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tokens),
    inject: ['DATA_SOURCE'],
  },
];
