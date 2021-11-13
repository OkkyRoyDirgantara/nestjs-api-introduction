import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {Post} from "./entities/post.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class PostsService {

  constructor(@InjectRepository(Post) private readonly postsService: Repository<Post>) {}

  create(createPostDto: CreatePostDto) {
    return this.postsService.save(createPostDto);
  }

  findAll() {
    return this.postsService.find();
  }

  findOne(id: number) {
    return this.postsService.findOne(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.postsService.delete(id);
  }
}
