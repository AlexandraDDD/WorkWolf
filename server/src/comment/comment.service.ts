import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment)
    private commentModel: typeof Comment,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    this.validateProjectOrTaskId(createCommentDto);
    const commentData = {
      text: createCommentDto.text,
      userId: createCommentDto.userId,
      ...(createCommentDto.projectId ? { projectId: createCommentDto.projectId } : {}),
      ...(createCommentDto.taskId ? { taskId: createCommentDto.taskId } : {}),
    };
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
    this.validateProjectOrTaskId({ ...comment, ...updateCommentDto });
    return comment.update(updateCommentDto);
  }

  async remove(id: string): Promise<void> {
    const comment = await this.findOne(id);
    await comment.destroy();
  }

  private validateProjectOrTaskId(commentDto: CreateCommentDto): void {
    if (commentDto.projectId && commentDto.taskId) {
      throw new Error('Either projectId or taskId must be provided, but not both.');
    }

    if (!commentDto.projectId && !commentDto.taskId) {
      throw new Error('Comment must be associated with either a project or a task');
    }
  }
}
