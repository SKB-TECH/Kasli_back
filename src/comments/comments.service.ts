import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CommentEntity } from "./entities/comment.entity";
import { New_comment_dto } from "./DTO/new_comment_dto";
import { Update_comment_dto } from "./DTO/update_comment_dto";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly CommentRepository: Repository<CommentEntity>
  ) {
  }

  async find(id: string): Promise<CommentEntity[]> {
    const comment = await this.CommentRepository.findBy({ idcomment: id });
    if (!comment) {
      throw new NotFoundException(
        `Le commentaire correspondant a cet id: ${id} n'existe pas `
      );
    }
    return comment;
  }

  // getOne
  async getOne(id: string): Promise<CommentEntity[]> {
    const comment = await this.find(id);
    return comment;
  }

  // findAll comments
  async getAll() {
    const comment = await this.CommentRepository.find();
    if (!comment) {
      throw new NotFoundException(
        `Aucun comment retrouve dans votre database !!`
      );
    }
    return comment;
  }

  //delete one comment
  async deleteOne(id: string) {
    return await this.CommentRepository.delete(id);
  }

  async new(nouveau: New_comment_dto): Promise<CommentEntity> {
    const comment = await this.CommentRepository.save(nouveau);
    if (!comment) {
      throw new NotAcceptableException("erreur lors d'enregistrement");
    }
    return comment;
  }

  async update(
    idcomment: string,
    data_update: Update_comment_dto
  ): Promise<CommentEntity> {
    const comment = await this.CommentRepository.preload({
      idcomment,
      ...data_update
    });
    if (!comment) {
      throw new NotAcceptableException(" erreur de modification addresse");
    }
    return await this.CommentRepository.save(comment);
  }

  // bloquer le message
  async bloquer(id: string) {
    return await this.CommentRepository.softDelete(id);
  }

  //debloquer
  async restore(id: string) {
    return await this.CommentRepository.restore(id);
  }
}
