import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({example: 'Jhon'})
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({example: 'mail@email.ru'})
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({example: '1234'})
  @IsNotEmpty()
  @IsString()
  password: string;
}
