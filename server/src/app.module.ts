import { Module } from '@nestjs/common';

import { UsersModule } from './user/users.module';
import { DatabaseModule } from './sequelize.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.entity';
import { Project } from './project/project.entity';
import { Team } from './team/team.entity';
import { Task } from './task/task.entity';
import { Comment } from './comment/comment.entity';
import { ProjectsModule } from './project/project.module';
import { TasksModule } from './task/task.module';
import { TeamsModule } from './team/team.module';
import { CommentsModule } from './comment/comment.module';
import { Subtask } from './subtask/subtask.entity';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.entity';
import { UserTeam } from './common/UserTeam/user-team.entity';
import { UserTeamModule } from './common/UserTeam/user-team.module';
import { UserRole } from './common/UserRole/user-role.entity';
import { UserRoleModule } from './common/UserRole/user-team.module';
import { AuthModule } from './auth/auth.module';


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
      models: [User, Project, Team, Task, Comment, UserTeam, Subtask, Role, UserRole ],
      autoLoadModels: true
    }),
    UsersModule,
    ProjectsModule,
    TasksModule,
    TeamsModule,
    CommentsModule,
    UserTeamModule,
    RolesModule,
    UserRoleModule,
    AuthModule

  ],


})

/* @Module({
  imports: [DatabaseModule, UsersModule,],
  controllers: [],
  providers: [],
 
}) */
export class AppModule { }
