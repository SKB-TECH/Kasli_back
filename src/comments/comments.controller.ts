import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { New_comment_dto } from "./DTO/new_comment_dto";
import { CommentEntity } from "./entities/comment.enetity";
import { Update_comment_dto } from "./DTO/update_comment_dto";

@Controller("kasli_api/comments")
export class CommentsController {
  constructor(private readonly serviceComment: CommentsService) {
  }

  // getOneComment
  @Get("only_comment/:id")
  async only_comment(@Param("id") id: string) {
    return await this.serviceComment.getOne(id);
  }

  //getAllComments
  @Get("all_comments")
  async all_comment() {
    return await this.serviceComment.getAll();
  }

  //add comment
  @Post("new_comment")
  async new_comment(@Body() comment: New_comment_dto): Promise<CommentEntity> {
    return await this.serviceComment.new(comment);
  }

  //update comment
  @Patch("update_comment/:id")
  async update_comment(
    @Param("id") id: string,
    @Body() commentModif: Update_comment_dto
  ): Promise<CommentEntity> {
    return await this.serviceComment.update(id, commentModif);
  }

  //bloquer
  @Get("bloquer_comment/:id")
  async bloque_comment(@Param("id") id: string) {
    return await this.serviceComment.bloquer(id);
  }

  //debloquer
  @Get("debloquer_comment/:id")
  async debloquer(@Param("id") id: string) {
    return await this.serviceComment.restore(id);
  }
}
