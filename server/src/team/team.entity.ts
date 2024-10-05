import { BeforeCreate, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { User } from 'src/user/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Table
export class Team extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @HasMany(() => User)
  users: User[];

  @BeforeCreate
  static generateId(instance: Team) {
    instance.id = uuidv4();
  }
}
