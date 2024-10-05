import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSubtaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  taskId: string;
}
