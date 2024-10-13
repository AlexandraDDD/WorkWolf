import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { User } from 'src/user/user.entity';

export class UpdateTeamDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsArray()
  @IsUUID(4, { each: true })
  userIds: string[];
}
