import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  models: [__dirname + '/src/**/*.model.ts'],
  define: {
    timestamps: false,
  },
};

@Module({
  imports: [SequelizeModule.forRoot(sequelizeConfig)],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
