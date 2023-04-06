import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { PostService } from "./post.service";
import { New_post_dto } from "./DTO/new_post_dto";
import { PostEntity } from "./entities/post.entity";
import { Update_post_dto } from "./DTO/update_post_dto";

@Controller("kasli_api/post")
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  // getOneComment
  @Get("only_post/:id")
  async only_post(@Param("id") id: string) {
    return await this.postService.find(id);
  }

  //getAllComments
  @Get("all_posts")
  async all_comment() {
    return await this.postService.getAll();
  }

  //add comment
  @Post("new_post")
  async new_post(@Body() post: New_post_dto): Promise<New_post_dto> {
    return await this.postService.new_post(post);
  }

  //update comment
  @Patch("update_post/:id")
  async update_comment(
    @Param("id") id: string,
    @Body() postModif: Update_post_dto
  ): Promise<PostEntity> {
    return await this.postService.update_post(id, postModif);
  }

  //bloquer
  @Get("bloquer_post/:id")
  async bloque_comment(@Param("id") id: string) {
    return await this.postService.bloquer_post(id);
  }

  //debloquer
  @Get("debloquer_post/:id")
  async debloquer(@Param("id") id: string) {
    return await this.postService.debloquer_post(id);
  }
}
