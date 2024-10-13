// create-user-team.dto.ts
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserTeamDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  teamId: string;
}
