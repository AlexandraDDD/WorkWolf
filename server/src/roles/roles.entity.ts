import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, PrimaryKey, Table, DataType, BelongsToMany } from 'sequelize-typescript';
import { UserRole } from 'src/common/UserRole/user-role.entity';
import { User } from 'src/user/user.entity';
import { v4 as uuidv4 } from 'uuid';

// role.enum.ts
export enum RoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

@Table({ timestamps: false })
export class Role extends Model {

  @ApiProperty({ example: '753c8c31-8866-426f-a5df-39d51d4fae24' })
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ApiProperty({ example: 'ADMIN' })
  @Column({
    type: DataType.ENUM('ADMIN', 'USER', 'GUEST'),
    allowNull: false,
  })
  value: RoleEnum;

  @ApiProperty({ example: 'Администратор' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];

}
