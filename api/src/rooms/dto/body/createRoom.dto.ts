import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Capacity should not be empty' })
  @IsNumber()
  capacity: number;
}
