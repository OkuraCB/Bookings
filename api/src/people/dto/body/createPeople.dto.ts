import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreatePeopleDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail()
  email: string;
}
