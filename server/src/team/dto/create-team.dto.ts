import { IsArray, IsUUID, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  @IsUUID(4, { each: true })
  userIds: string[];
}