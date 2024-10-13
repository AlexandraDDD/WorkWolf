import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, PrimaryKey, Table, DataType, BelongsToMany, ForeignKey,  } from 'sequelize-typescript';
import { Role } from 'src/roles/roles.entity';
import { User } from 'src/user/user.entity';
import { v4 as uuidv4 } from 'uuid';


@Table({ timestamps: false }) 
export class UserRole extends Model {

  @ApiProperty({example: '753c8c31-8866-426f-a5df-39d51d4fae24'})

  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;
  
  @ApiProperty({example: '753c8c31-8866-426f-a5df-39d51d4fae25'})

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId: string;
  
  @ApiProperty({example: '753c8c31-8866-426f-a5df-39d51d4fae26'})

  @ForeignKey(() => Role)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  roleId: string;


}