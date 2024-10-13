import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentsService } from './comment.service';
import { CommentsController } from './comment.controller';
import { Comment } from './comment.entity';

@Module({
  imports: [SequelizeModule.forFeature([Comment])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
