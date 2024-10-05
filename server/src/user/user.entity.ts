import { BeforeCreate, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table
export class User extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @BeforeCreate
  static generateId(instance: User) {
    instance.id = uuidv4();
  }
}
