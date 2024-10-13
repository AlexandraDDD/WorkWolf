import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Project } from './project.entity';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { CommentsService } from 'src/comment/comment.service';
import { Team } from 'src/team/team.entity';
import { Task } from 'src/task/task.entity';
import { Comment } from 'src/comment/comment.entity';


@Module({
  imports: [SequelizeModule.forFeature([Project, Team, Task, Comment])],
  controllers: [ProjectController],
  providers: [ProjectService,  ],
})
export class ProjectsModule {}
