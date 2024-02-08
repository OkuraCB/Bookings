import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDate,
  ValidateNested,
  IsDateString,
} from 'class-validator';

export class CreateMeetingDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty({ message: 'Start should not be empty' })
  @IsDateString()
  start: Date;

  @IsNotEmpty({ message: 'End should not be empty' })
  @IsDateString()
  end: Date;

  @IsNotEmpty({ message: 'Room name should not be empty' })
  @IsString()
  roomName: string;

  representativeEmails: string[];

  invitedEmails: string[];

  @IsNotEmpty({ message: 'Gravity should not be empty' })
  @IsString()
  gravity: string;
}
