import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { PostEntity } from "./entities/post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { New_post_dto } from "./DTO/new_post_dto";
import { Update_post_dto } from "./DTO/update_post_dto";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>
  ) {
  }

  async find(id: string): Promise<PostEntity[]> {
    const post = await this.postRepository.findBy({ idpost: id });
    if (!post) {
      throw new NotFoundException(
        `Le post correspondant a cet id: ${id} n'existe pas `
      );
    }
    return post;
  }

  async getAll() {
    const post = await this.postRepository.find();
    if (!post) {
      throw new NotFoundException(`Pas des posts disponibles `);
    }
    return post;
  }

  async new_post(data: New_post_dto): Promise<New_post_dto> {
    const post: New_post_dto = await this.postRepository.save({
      ...data,
      photos: ""
    });
    return post;
  }

  async update_post(
    idpost: string,
    data_update: Update_post_dto
  ): Promise<PostEntity> {
    const posts = await this.postRepository.preload({
      idpost,
      ...data_update,
      photos: ""
    });
    if (!posts) {
      throw new NotAcceptableException(" erreur de modification post");
    }
    return await this.postRepository.save(posts);
  }

  async bloquer_post(idpost: string) {
    return await this.postRepository.softDelete(idpost);
  }

  async debloquer_post(idpost: string) {
    return await this.postRepository.restore(idpost);
  }
}
