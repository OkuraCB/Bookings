import { Expose } from 'class-transformer';

export class PeopleDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;
}
