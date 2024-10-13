import { IsOptional, IsString } from 'class-validator';

export class UpdateSubtaskDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

}
