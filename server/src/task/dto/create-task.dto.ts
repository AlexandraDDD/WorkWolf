import { IsEmail, IsNotEmpty, IsString } from 'class-validator';



export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  projectId: string;
}

