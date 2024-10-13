import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './task.entity';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';
import { Comment } from 'src/comment/comment.entity';
import { Subtask } from 'src/subtask/subtask.entity';

@Module({
  imports: [SequelizeModule.forFeature([Task, Comment, Subtask,])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
