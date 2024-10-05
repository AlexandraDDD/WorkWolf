import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comment.entity';
import { CreateCommentDto, validateCreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment)
    private commentModel: typeof Comment,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    validateCreateCommentDto(createCommentDto);
    const commentData ={
      text: createCommentDto.text,
      userId: createCommentDto.userId,
      projectId: createCommentDto.projectId,
      taskId: createCommentDto.taskId,
    }
    return this.commentModel.create(commentData);
  }

  async findAll(): Promise<Comment[]> {
    return this.commentModel.findAll();
  }

  async findOne(id: string): Promise<Comment> {
    return this.commentModel.findByPk(id);
  }

  async update(id: string, updateCommentDto: Partial<CreateCommentDto>): Promise<Comment> {
    const comment = await this.findOne(id);
    validateCreateCommentDto({ ...comment, ...updateCommentDto });
    return comment.update(updateCommentDto);
  }

  async remove(id: string): Promise<void> {
    const comment = await this.findOne(id);
    await comment.destroy();
  }
}
