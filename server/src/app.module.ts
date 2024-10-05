import { Module } from '@nestjs/common';

import { UsersModule } from './user/users.module';
import { DatabaseModule } from './sequelize.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.entity';



@Module({
  controllers: [],

  imports: [

    /*  ServeStaticModule.forRoot({
         rootPath: path.resolve( __dirname, 'static'),
     }), */
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost'/* process.env.DB_HOST */,
      port: 5432   /* Number(process.env.DB_PORT) */,
      username: 'postgres'/* process.env.DB_USER */,
      password: 'admin'/* String(process.env.DB_PASSWORD) */, // Convert to string
      database: 'work_wolf'/* process.env.DB_NAME */,
      models: [User,],
      autoLoadModels: true
    }),
    UsersModule,

  ],


})

/* @Module({
  imports: [DatabaseModule, UsersModule,],
  controllers: [],
  providers: [],
 
}) */
export class AppModule { }
