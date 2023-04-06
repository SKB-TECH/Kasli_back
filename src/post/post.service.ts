import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { PostEntity } from "./entities/post.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>
  ) {
  }
  
}
