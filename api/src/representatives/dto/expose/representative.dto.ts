import { Expose } from 'class-transformer';

export class RepresentativeDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  customer: string;
}
