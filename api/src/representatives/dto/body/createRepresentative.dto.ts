import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateRepresentativeDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Customer should not be empty' })
  @IsString()
  customer: string;
}
